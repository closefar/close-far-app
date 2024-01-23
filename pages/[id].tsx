import Head from 'next/head'
import Mock from '../config/mock'
import { useRouter } from 'next/router'

export default function Detail() {
	
	const router = useRouter()
	const { id } = router.query
  
  	return (
		<>
			<Head>
				<title>Close Far</title>
				<meta name="description" content="Close Far" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className='container text-center'>
					<div className='row mb-4'>
						<div className='col'>
							<h3>
								{Mock[id] && Mock[id].name}
							</h3>
							<div className='cf-dot-seperator'>
								<span>
									{Mock[id] && Mock[id].born}
								</span>
								<span>
									{Mock[id] && Mock[id].language}
								</span>
								<span>
									{Mock[id] && Mock[id].age}
								</span>
								<span>
									<div className='d-inline'>30.00</div>
									<img src="/flow.ico" className='img-fluid mx-2' width="20" />
								</span>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-10 col-md-6 mb-3'>    
							<img src={`${id}.jpg`} className='img-fluid img-border' />
						</div>
					</div>
				</div>
			</main>
		</>
  	)
}
