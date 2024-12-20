import { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { toJS } from 'mobx'
import {
  Button,
  ConfirmModal,
  ExternalLink,
  FieldTextarea,
  FlagIconEvents,
  Loader,
  MapWithPin,
} from 'oa-components'
import { IModerationStatus, ProfileTypeList } from 'oa-shared'
import { useCommonStores } from 'src/common/hooks/useCommonStores'
import {
  buttons,
  fields,
  headings,
  mapForm,
} from 'src/pages/UserSettings/labels'
import { randomIntFromInterval } from 'src/utils/helpers'
import { required } from 'src/utils/validators'
import { Alert, Box, Flex, Heading, Text } from 'theme-ui'

import { SettingsFormNotifications } from './content/SettingsFormNotifications'
import { MAX_PIN_LENGTH } from './constants'

import type { ILocation, IMapPin, IUserDB } from 'oa-shared'
import type { IFormNotification } from './content/SettingsFormNotifications'

interface IPinProps {
  mapPin: IMapPin | undefined
}

interface ILocationProps {
  location: IUserDB['location']
}

const LocationDataTextDisplay = ({ location }: ILocationProps) => {
  if (!location?.latlng)
    return (
      <Text
        variant="paragraph"
        data-cy="NoLocationDataTextDisplay"
        data-testid="NoLocationDataTextDisplay"
      >
        {mapForm.noLocationLabel}
      </Text>
    )

  return (
    <Text
      variant="paragraph"
      data-cy="LocationDataTextDisplay"
      data-testid="LocationDataTextDisplay"
    >
      {mapForm.locationLabel}
      <br />
      {location?.name}{' '}
      <FlagIconEvents
        countryCode={location.countryCode}
        title={location.countryCode}
      />
      <br />
    </Text>
  )
}

const MapPinModerationComments = ({ mapPin }: IPinProps) => {
  if (
    !mapPin ||
    !mapPin.comments ||
    mapPin.moderation != IModerationStatus.IMPROVEMENTS_NEEDED
  )
    return null

  return (
    <Alert variant="info" sx={{ fontSize: 2, textAlign: 'left' }}>
      <Box>
        {mapForm.needsChanges}
        <br />
        <em>{mapPin?.comments}</em>
      </Box>
    </Alert>
  )
}

interface IPropsDeletePin {
  setIsLoading: (arg: boolean) => void
  setNotification: (arg: IFormNotification) => void
  user: IUserDB
}

const DeleteMapPin = (props: IPropsDeletePin) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)
  const { setIsLoading, setNotification, user } = props
  const { mapsStore, userStore } = useCommonStores().stores

  const onSubmitDelete = async () => {
    setIsLoading(true)
    try {
      const updatedUser = await userStore.deleteUserLocation(user)
      if (updatedUser) {
        await mapsStore.deleteUserPin(toJS(updatedUser))
      }
      setNotification({
        message: mapForm.sucessfulDelete,
        icon: 'check',
        show: true,
        variant: 'success',
      })
    } catch (error) {
      setNotification({
        message: `Delete failed - ${error.message} `,
        icon: 'close',
        show: true,
        variant: 'failure',
      })
    }
    setIsLoading(false)
  }

  return (
    <>
      <ConfirmModal
        isOpen={showConfirmModal}
        message={mapForm.confirmDeletePin}
        confirmButtonText={buttons.removePin}
        handleCancel={() => setShowConfirmModal(false)}
        handleConfirm={onSubmitDelete}
        width={450}
      />
      <Button
        type="button"
        onClick={() => setShowConfirmModal(true)}
        data-cy="remove-map-pin"
        variant="destructive"
        sx={{ alignSelf: 'flex-start' }}
        icon="delete"
      >
        {buttons.removePin}
      </Button>
    </>
  )
}

export const SettingsPageMapPin = () => {
  const communityProgramUrl =
    import.meta.env.VITE_COMMUNITY_PROGRAM_URL ||
    process.env.VITE_COMMUNITY_PROGRAM_URL
  const [mapPin, setMapPin] = useState<IMapPin>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [notification, setNotification] = useState<
    IFormNotification | undefined
  >(undefined)

  const { mapsStore, userStore } = useCommonStores().stores
  const user = userStore.activeUser
  const { addPinTitle, yourPinTitle } = headings.map

  const formId = 'MapSection'
  const isMember = user?.profileType === ProfileTypeList.MEMBER

  useEffect(() => {
    const init = async () => {
      if (!user) return

      const pin = (await mapsStore.getPin(user.userName)) || null
      setMapPin(pin)
      setIsLoading(false)
    }

    init()
  }, [user, notification])

  if (!user) return null

  const defaultLocation = {
    latlng: {
      lat: randomIntFromInterval(-90, 90),
      lng: randomIntFromInterval(-180, 180),
    },
  }

  const onSubmit = async ({ location, mapPinDescription }) => {
    setIsLoading(true)
    try {
      const updatingUser = {
        ...user,
        location,
        mapPinDescription,
      }
      const updatedUser = await userStore.updateUserLocation(updatingUser)
      if (updatedUser) {
        await mapsStore.setUserPin(toJS(updatedUser))
      }
      setNotification({
        message: mapForm.succesfulSave,
        icon: 'check',
        show: true,
        variant: 'success',
      })
    } catch (error) {
      setNotification({
        message: `Save Failed - ${error.message} `,
        icon: 'close',
        show: true,
        variant: 'failure',
      })
    }
    setIsLoading(false)
  }

  const initialValues = {
    location: user?.location || {},
    mapPinDescription: user.mapPinDescription || '',
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 4,
      }}
    >
      <Flex sx={{ flexDirection: 'column', gap: 1 }}>
        <Heading as="h2" id="your-map-pin">
          {mapPin ? addPinTitle : yourPinTitle}
        </Heading>
        {isMember && (
          <Text
            variant="quiet"
            data-cy="descriptionMember"
            data-testid="descriptionMember"
          >
            {mapForm.descriptionMember}
          </Text>
        )}

        {!isMember && (
          <Text
            variant="quiet"
            data-cy="descriptionSpace"
            data-testid="descriptionSpace"
          >
            {mapForm.descriptionSpace}
            <br />
            <ExternalLink
              data-cy="WorkspaceMapPinRequiredStars"
              data-testid="WorkspaceMapPinRequiredStars"
              href={communityProgramUrl}
              sx={{ textDecoration: 'underline', color: 'currentcolor' }}
            >
              {headings.workspace.description}
            </ExternalLink>
          </Text>
        )}
      </Flex>

      <MapPinModerationComments mapPin={mapPin} />

      <Form
        id={formId}
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ errors, submitFailed, submitting, handleSubmit }) => {
          if (isLoading)
            return (
              <Loader label={mapForm.loading} sx={{ alignSelf: 'center' }} />
            )

          return (
            <>
              <SettingsFormNotifications
                errors={errors}
                notification={notification}
                submitFailed={submitFailed}
              />

              <LocationDataTextDisplay location={user?.location} />

              <Field
                name="location"
                render={({ input }) => {
                  const { onChange, value } = input
                  const location: ILocation =
                    value && value.latlng ? value : defaultLocation

                  return (
                    <MapWithPin
                      position={location.latlng}
                      draggable={true}
                      updatePosition={(newPosition) => {
                        onChange({ latlng: newPosition })
                      }}
                    />
                  )
                }}
              />

              <Flex sx={{ flexDirection: 'column', gap: 0 }}>
                <Text sx={{ fontSize: 2 }}>
                  {fields.mapPinDescription.title}
                </Text>
                <Field
                  data-cy="pin-description"
                  name="mapPinDescription"
                  component={FieldTextarea}
                  maxLength={MAX_PIN_LENGTH}
                  style={{ height: 'inherit' }}
                  rows="1"
                  showCharacterCount
                  placeholder={fields.mapPinDescription.placeholder}
                  validate={required}
                  validateFields={[]}
                />
              </Flex>

              <Button
                type="submit"
                form={formId}
                data-cy="save-map-pin"
                variant="primary"
                onClick={handleSubmit}
                disabled={submitting}
                sx={{ alignSelf: 'flex-start' }}
              >
                {buttons.editPin}
              </Button>

              <DeleteMapPin
                setIsLoading={setIsLoading}
                setNotification={setNotification}
                user={user}
              />
            </>
          )
        }}
      />
    </Flex>
  )
}
