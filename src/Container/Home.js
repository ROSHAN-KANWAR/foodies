import React,{Fragment} from 'react'

function Home() {
  return (
    <Fragment>
   <div className='root'>
   <navbar>
   <div>
   <span>Meflix</span>
   </div>
        <div className='navlink'>
        <ol>
        <li>Movies</li>
        <li>Series</li>
        <li>Trailer</li>
        <li>Hollywood</li>
        </ol>
        <button>Sign in</button>
        </div>
   </navbar>
   <main>
   <div>
   <h1>Unlimited movies, TV shows and more</h1>
   <span>Watch anywhere. Cancel anytime.</span><br></br>
  <span>Ready to watch? Enter your email to create or restart your membership.</span>
   </div>
   <div>
   <div className='get_started'>
   <input type="text" placeholder='Email address..'/>
   <button>Get Stared</button>
   </div>

   </div>
   </main>
   </div>
    </Fragment>
  )
}

export default Home