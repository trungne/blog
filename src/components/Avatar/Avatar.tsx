import profilePC from "./profile-pc.jpg"
import profileMobile from "./profile-mobile.jpg"

export default () => {
  return (
    <div className="avatar block md:my-8">
      <div className="mx-auto h-44 w-44 rounded-full md:h-64 md:w-64">
        <picture>
          <source srcSet={profilePC} media="(min-width: 768px)" />
          <img src={profileMobile} alt="my awesome avatar" />
        </picture>
      </div>
    </div>
  )
}
