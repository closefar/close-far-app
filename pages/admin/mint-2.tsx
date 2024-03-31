import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Mint3() {

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
									<div className="progress-bar bg-dark"> 2. Add Information</div>
								</div>
								<div className="progress" style={{ width: '33.3%' }}>
									<div className="progress-bar bg-dark"> 3. Review and Mint</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row mb-5'>
						<div className='col-12 col-md-4'>
							<div className='cf-img-container position-relative'>
								<img src='/1.jpg' className='img-fluid img-border' />
								<div className='cf-img-text d-none fs-5'>
									O
									Watch
								</div>
							</div>
						</div>
						<div className='col-12 col-md-8'>
							<div className='text-muted'>
								<div>
									Maaike
								</div>
								<div>
									Italy
								</div>
								<div>
									She/her/hers
								</div>
								<div>
									Software eng.
								</div>
								<div>
									Dutch
								</div>
								<div>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
								</div>
							</div>
						</div>
					</div>
					<div className='row my-5'>
						<div className='col-6 text-start'>
							<button onClick={() => router.push('/admin/mint-1')} className='btn btn-light'>Prev</button>
						</div>
						<div className='col-6 text-end'>
							<button onClick={() => router.push('/admin/my-collection')} className='btn btn-light'>Mint</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
