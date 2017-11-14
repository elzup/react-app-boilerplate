// @flow
import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrap = styled.span`
	color: #a500bd;
	text-decoration: none !important;
`

type Props = {
	to: string,
	label: string,
}

const StyledLink = ({ to, label }: Props) => (
	<Link to={to}>
		<Wrap>{label}</Wrap>
	</Link>
)

export default StyledLink
