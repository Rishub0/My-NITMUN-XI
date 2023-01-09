import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { dark } from '../../data/GlobalData';

export const Nav = styled.nav`
	background: ${({ hide }) => (hide ? 'transparent' : dark)};
	margin-top: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-family: 'IM Fell DW Pica SC', serif;
	position: sticky;
	top: 0;
	z-index: 55;
	width: 100%;
	// background: transparent;
	@media screen and (max-width: 960px){
		width: 100vw;
		overflow-x: hidden;
		height: 60px;
		
	}
	
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 60px;

	@media screen and (max-width: 960px){
		width: 100vw;
		overflow-x: hidden;
		
	}
`;

export const NavLogo = styled(Link)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 49;
 
	@media screen and (max-width: 960px){
		padding-bottom: 2px;
		padding-left: 4px;
	}
	
`;

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 3.2rem;

	@media screen and (max-width: 960px){
		width: 2.4rem;
	
	}

`;
export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: flex;
		position: fixed;
		vertical-align: top;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: black;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&.active {
		text-shadow: 0 0 20px #aa0000, 0 0 15px #aa0000, 0 0 10px #aa0000;

		@media screen and (min-width: 960px) {
			border-bottom: 2px solid red;
		}
	}
	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;
