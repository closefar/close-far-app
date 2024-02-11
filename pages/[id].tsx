import Head from 'next/head'
import Mock from '../config/mock'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Detail() {
	
	const router = useRouter()
	const { id } = router.query
	const [showMore, setShowMore] = useState(false)
  
  	return (
		<>
			<Head>
				<title>Close Far</title>
				<meta name="description" content="Close Far" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<h3>
								{Mock[id] && Mock[id].name}
							</h3>
							<div className='cf-dot-seperator'>
								<span>
									{Mock[id] && Mock[id].y_birth}
								</span>
								<span>
									<div className='d-inline-block me-2'>30.00</div>
									<img src="/flow.ico" className='d-inline-block img-fluid' width="20" />
								</span>
								<span>
									<button 
										onClick={() => setShowMore(!showMore)} 
										className={`btn ${showMore ? 'btn-more-up' : 'btn-more-down'}`}
									>
										{showMore ? 'Less' : 'More'}
									</button> 
								</span>
							</div>
						</div>
					</div>
					{showMore &&
						<div className='row'>
							<div className='col'>
								<div className='cf-dot-seperator'>
									<span>
										{Mock[id] && Mock[id].language}
									</span>	
									<span>
										{Mock[id] && Mock[id].born}
									</span>	
									<span>
										She/her/hers
									</span>	
									<span>
										Software eng.
									</span>	
									<span>
										Dutch
									</span>		
								</div>
							</div>
						</div>				
					}
					<div className='row justify-content-center mt-4'>
						<div className='col-10 col-md-6 mb-3'>    
							<img src={`${id}.jpg`} className='img-fluid img-border' />
						</div>
					</div>
				</div>
			</main>
		</>
  	)
}
