const Card = () => {
  return (
    <>
      <div className="container" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        margin: "0",
        width: "15em",
        border: "1px dotted #000000"
      }}>


        <img classname="image" alt="pfp" />
        <h2 className="title"> Title </h2>
        <p className="desc" style={{
          width: "15em",
          fontSize: "15px",
          alignContent: "center",
          textAlign: "center",
          padding: "0",
          margin: "0",
        }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam fuga quos eligendi quaerat assumenda quae dolore! Natus asperiores culpa quibusdam, nostrum tempora reprehenderit vitae atque neque esse! Alias, cupiditate odio.
        </p>

      </div>
    </>
  )
}

export default Card
