export function Card( props ) {

	const formatter = new Intl.NumberFormat( "en-US", {
		style: "currency",
		currency: "USD",
	} )

	return (
		<>
			<h1>{ props.name }</h1>
			<p>
				<span>Price:</span>
				<span>{ formatter.format( props.price ) }</span>
			</p>
		</>
	)
}
