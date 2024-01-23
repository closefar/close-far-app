import Head from 'next/head'

export default function Mint() {

	return (
		<>
			<Head>
				<title>Close Far</title>
				<meta name="description" content="Close Far" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className='container'>
					<div className='row text-center'>
						<div className='col'>
							<h3>
								Mint
							</h3>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 col-md-6 mb-3'>
							<div className="form-floating mb-3">
								<input type="text" className="form-control shadow-none" id="floatingInput" placeholder="" />
								<label htmlFor="floatingInput">Name</label>
							</div>
							<div className="form-floating mb-3">
								<select className="form-select shadow-none" id="floatingSelect" aria-label="Floating label select example">
									<option selected>Select a Country</option>
									<option value="1">Czech Republic</option>
									<option value="2">Germany</option>
									<option value="3">Italy</option>
								</select>
								<label htmlFor="floatingSelect">Country</label>
							</div>
							<div className="form-floating mb-3">
								<select className="form-select shadow-none" id="floatingSelect" aria-label="Floating label select example">
									<option selected>Select a Language</option>
									<option value="1">English</option>
									<option value="2">Dutch</option>
									<option value="3">Italian</option>
								</select>
								<label htmlFor="floatingSelect">Language</label>
							</div>
							<div className="form-floating">
								<textarea style={{ height: "100px" }} className="form-control shadow-none" placeholder="About the NFT" id="floatingTextarea"></textarea>
								<label htmlFor="floatingTextarea">About</label>
							</div>
						</div>
						<div className='col-12 col-md-6 mb-3'>
							<div className="input-group mb-3">
								<label className="input-group-text" htmlFor="inputGroupFile02">Upload the thumbnail</label>
								<input type="file" className="form-control shadow-none" id="inputGroupFile02" />
							</div>
							<div className="input-group mb-3">
								<label className="input-group-text" htmlFor="inputGroupFile01">Upload the video</label>
								<input type="file" className="form-control shadow-none" id="inputGroupFile01" />
							</div>
						</div>
						<div className='col-12 text-center mt-4'>
							<button type="button" className="btn btn-outline-primary">Mint my NFT</button>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
