import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Mint() {

	const router = useRouter()

	return (
		<>
			<Head>
				<title>Close Far</title>
				<meta name="description" content="Close Far" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className='container'>
					<div className='row my-5 text-center'>
						<div className='col'>
							<div className='d-inline-block mt-5'>
								<h1>
									Mint
								</h1>
							</div>
						</div>
					</div>
					<div className='row justify-content-center mb-5'>
						<div className='col-12 mb-5'>
							<div className="cf-progress-stacked progress-stacked">
								<div className="progress" style={{ width: '33.3%' }}>
									<div className="progress-bar bg-dark"> 1. Upload Video </div>
								</div>
								<div className="progress" style={{ width: '33.4%' }}>
									<div className="progress-bar bg-light text-dark"> 2. Add Information</div>
								</div>
								<div className="progress" style={{ width: '33.3%' }}>
									<div className="progress-bar bg-light text-dark"> 3. Review and Mint</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-8 text-center'>
							<div className='cf-upload-box'>
								Select a video or drag here
							</div>
						</div>
					</div>
					<div className='row my-5'>
						<div className='col text-end'>
							<button onClick={() => router.push('/admin/mint-1')} className='btn btn-light'>Next</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
