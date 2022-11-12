// Components imports
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Default = () => {
  return (
    <div className="App">
    <style 
      dangerouslySetInnerHTML={{
        __html: `
          .header_flex {
            display: flex
          }
        `
      }}
    />
      <header className="header_flex" style={{
        "justifyContent":"space-between",
        "padding":"0 20px"
      }}>
        <div className="header_flex" style={{
          "marginRight":"20px",
          "alignItems":"center"
        }}>
          <img 
            style={{
              "height":"40px",
              "marginRight":"10px"
            }}
            src="http://afa7789.com/public/images/logo.svg" 
            alt="afa7789 logo"
          />
        </div>
        <ConnectButton/>
      </header>
      <section style={{
        "padding":"0 20px"
      }}>
        <h1>
          Title
        </h1>
        <h2>
          SubTitle
        </h2>
        <p>
          Lorem Ipsum
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Fames ac turpis egestas integer eget. Cursus mattis molestie a iaculis at. Viverra adipiscing at in tellus integer. Pretium lectus quam id leo in. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Et ligula ullamcorper malesuada proin libero nunc consequat. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Pellentesque diam volutpat commodo sed egestas egestas. In massa tempor nec feugiat nisl. Egestas tellus rutrum tellus pellentesque eu. Tellus at urna condimentum mattis pellentesque id nibh. In hendrerit gravida rutrum quisque non. Consequat interdum varius sit amet mattis vulputate enim. Feugiat sed lectus vestibulum mattis ullamcorper. Interdum posuere lorem ipsum dolor sit amet consectetur. Interdum velit euismod in pellentesque massa. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Proin libero nunc consequat interdum.
          Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tristique senectus et netus et. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Congue quisque egestas diam in arcu cursus euismod quis. Quam id leo in vitae. Tortor at risus viverra adipiscing. Proin sed libero enim sed faucibus turpis. Proin libero nunc consequat interdum varius sit amet mattis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Scelerisque purus semper eget duis at tellus at urna condimentum.
          Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nullam ac tortor vitae purus faucibus ornare suspendisse. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Consectetur adipiscing elit pellentesque habitant morbi tristique. In est ante in nibh mauris cursus mattis. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et. Tristique risus nec feugiat in. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sit amet justo donec enim diam vulputate ut pharetra. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Duis at tellus at urna condimentum mattis pellentesque.
          Tempor orci dapibus ultrices in iaculis. A diam sollicitudin tempor id eu nisl nunc. Nulla facilisi cras fermentum odio. Tortor condimentum lacinia quis vel eros donec ac. Dignissim cras tincidunt lobortis feugiat. Ac tortor vitae purus faucibus ornare. Tristique nulla aliquet enim tortor at auctor urna nunc. Dui sapien eget mi proin. Lectus sit amet est placerat in egestas erat imperdiet sed. Turpis egestas integer eget aliquet nibh praesent tristique magna. Eu sem integer vitae justo. Eget mauris pharetra et ultrices neque ornare. Ipsum nunc aliquet bibendum enim. Eu sem integer vitae justo eget magna fermentum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin.
          Ac turpis egestas maecenas pharetra convallis posuere. Consectetur a erat nam at lectus. Diam vulputate ut pharetra sit amet aliquam id. Malesuada nunc vel risus commodo viverra maecenas accumsan. Nunc vel risus commodo viverra. Molestie nunc non blandit massa enim. In egestas erat imperdiet sed euismod nisi porta. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Nulla malesuada pellentesque elit eget gravida. Duis tristique sollicitudin nibh sit amet. Faucibus in ornare quam viverra orci sagittis. Viverra justo nec ultrices dui sapien eget mi proin. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Viverra suspendisse potenti nullam ac tortor vitae. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Ut venenatis tellus in metus vulputate eu. 
        </p>
      </section>
    </div>
  );
};
