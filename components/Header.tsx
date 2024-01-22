import * as fcl from '@onflow/fcl'
import useCurrentUser from '../hooks/useCurrentUser'
import Link from 'next/link'

export default function Header() {
  const user = useCurrentUser()

  return (
    <>
      <div className="container text-center py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-4 text-start">
            {user.loggedIn && 
              <div>{ user?.addr }</div>
            }
          </div>
          <div className="col-4">
            <Link href="/">
              <img src="/logo.png" alt="Close Far" width="95" height="60" />
            </Link>
          </div>
          <div className="col-4 text-end">
            {!user.loggedIn && 
              <button className="btn" onClick={fcl.authenticate} aria-current="page">Connect Wallet</button>
            }
            {user.loggedIn && 
            (
              <>
                <button className="btn">
                  Mint
                </button>
                <button className="btn">
                  Collect
                </button>
                <button className="btn">
                  Sell
                </button>
                <button className="btn" onClick={fcl.unauthenticate}>
                  Log Out
                </button>
              </>
            )
          }
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className='row'>
          <div className='cf-border'></div>
        </div>
      </div>
    </>
  )
}