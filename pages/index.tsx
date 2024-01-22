import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

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
								So Close, But Yet So Far Away
							</h3>
							<p>
								So Close, But Yet So Far Away
							</p>
						</div>
					</div>
					<div className='row mb-3 justify-content-center'>
						<div className='cf-border-small'></div>
					</div>
					<div className='row text-start mb-3'>
						<div className='col-12 mb-2'>
							Filters
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<div className="form-floating">
								<select className="form-select shadow-none" id="floatingSelect" aria-label="Floating label select example">
									<option selected>Select a Country</option>
									<option value="1">Czech Republic</option>
									<option value="2">Germany</option>
									<option value="3">Italy</option>
								</select>
								<label htmlFor="floatingSelect">Country</label>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<div className="form-floating">
								<select className="form-select shadow-none" id="floatingSelect" aria-label="Floating label select example">
									<option selected>Select a Language</option>
									<option value="1">English</option>
									<option value="2">Dutch</option>
									<option value="3">Italian</option>
								</select>
								<label htmlFor="floatingSelect">Language</label>
							</div>
						</div>
						<div className='col-6 col-md-4 mb-2'>
							<div className="form-floating">
								<select className="form-select shadow-none" id="floatingSelect" aria-label="Floating label select example">
									<option selected>Select an Age</option>
									<option value="1">20</option>
									<option value="2">21</option>
									<option value="3">22</option>
								</select>
								<label htmlFor="floatingSelect">Age</label>
							</div>
						</div>
					</div>
					<div className='row'>
						{[1,2,3,4,5,6,7,8].map((i) => {
							return <div className='col-12 col-md-4 mb-3'>
								<Link href={`${i}`}>
									<img src={`${i}.jpg`} className='img-fluid img-border' />
								</Link>
							</div>
						})}
					</div>
				</div>
			</main>
		</>
	)
}