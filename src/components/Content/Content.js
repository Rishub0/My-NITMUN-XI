import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import { saveAs } from 'file-saver';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	ContentHeading,
	ContentButton,
	ContentButton1,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Modal from '../Modal/Modal';

const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	buttonLabel1,
	href1,
	href,
	download1,
	download,
	img,
	alt,
	inverse,
	reverse,
	bigImage,
}) => {

	function downloadFile(){
		saveAs(href,download)
	}
	function downloadFile1(){
		saveAs(href1,download1)
	}
	const [showModal, setShowModal] = useState(false);
	const initial = { opacity: 0, scale: 0.3 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				scale: 1,
			});

			return;
		}

		animation.start({
			opacity: 0,
			scale: 0.3,
		});
	}, [inView, animation]);

	return (
		<>
			<ContentSec inverse={inverse} ref={ref}>
				<Container>
					<ContentRow reverse={reverse}>
						<ContentColumn>
							<TextWrapper>
								{/* <TopLine
									initial={initial}
									transition={{ ...transition, delay: 0.5 }}
									animate={animation}
								>
									{topLine.text}
								</TopLine> */}
								<ContentHeading
									initial={initial}
									transition={transition}
									animate={animation}
									inverse={inverse}
								>
									{headline}
								</ContentHeading>
								<Subtitle
									initial={initial}
									transition={{ ...transition, delay: 0.7 }}
									animate={animation}
									inverse={inverse}
								>
									{description}
								</Subtitle>

								<ContentButton1
									initial={initial}
									transition={{ ...transition, delay: 1 }}
									animate={animation}
									inverse={inverse}
									primary={primary}
									href={href1}
									value={download1}
									onClick={() => {
										downloadFile1();
									}}
								>
									{buttonLabel}
								</ContentButton1>
								<ContentButton
									initial={initial}
									transition={{ ...transition, delay: 1 }}
									animate={animation}
									inverse={inverse}
									primary={primary}
									href={href1}
									value={download1}
									onClick={() => {
										downloadFile();
									}}
								>
									{buttonLabel1}
								</ContentButton>
							</TextWrapper>
						</ContentColumn>
						<ContentColumn
							initial={animation}
							transition={transition}
							animate={animation}
							bigImage={bigImage}
						>
							<ImgWrapper>
								<Img
									src={img}
									alt={alt}
									initial={{ rotate: 2 }}
									whileHover={{ rotate: 0, scale: 1.02 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</ContentColumn>
					</ContentRow>
				</Container>
			</ContentSec>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ContentHeading inverse={inverse}>{headline}</ContentHeading>
				<ImgWrapper>
					<Img src={img} alt={alt} />
				</ImgWrapper>
				<Subtitle inverse={inverse}>{description}</Subtitle>
				<ContentButton inverse={inverse} primary={primary}>
					Buy Tickets
				</ContentButton>
			</Modal>
		</>
	);
};

export default Content;
