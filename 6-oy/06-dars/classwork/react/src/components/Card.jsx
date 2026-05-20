export function Cards( { children } ) {

	return <ul>{ children }</ul>
}

export function Card( props ) {

	const formatter = new Intl.NumberFormat( "uz-UZ", {
		style: "currency",
		currency: "UZS",
	} )

	return (
		<li onClick={ props.onClick }>
			<h1>{ props.name }</h1>
			<p>
				<span>Price:</span>
				<span>{ formatter.format( props.price ) }</span>
			</p>
		</li>
	)
}
