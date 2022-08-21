import './StartingPage.css'

function StartingPage() {
  return (
    <div className="d-flex flex-column starting-page w-100">
      <section className="m-auto p-3">
        <h1 className="text-center mb-5"> Welcome to my project !</h1>
        <p>
          The purpose of this website was to train myself on React and some others libraries like React Router or Bootstrap.
          <br /> In order to achieve that goal, I decided to recreate some basics functionalities of the{' '}
          <a href="https://discord.com" className="fw-bold link-info">
            Discord
          </a>{' '}
          application.
          <br />
          Feel free to test it by first selecting a chat to display by clicking on one icon on the left !
        </p>
        <p>
          You can also check my{' '}
          <a href="https://github.com/vltthomas?tab=repositories" className="fw-bold link-info">
            Github
          </a>{' '}
          to see my others works.
        </p>
        <p className="text-end">Valentin T.</p>
      </section>
    </div>
  )
}

export default StartingPage
