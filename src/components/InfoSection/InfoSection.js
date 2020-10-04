import React from 'react'
import { Link } from 'react-router-dom'
import { InfoSec, InfoColumn, InfoRow, TextWrapper, TopLine, Heading, SubTitle, ImageWrapper, Img } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'

const InfoSection = ({ lightBg, imgStart, lightTopLine, topLine, headline, lightText, lightTextDesc, buttonLabel, description, primary, start, img, alt }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lighText={lightText}>{headline}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImageWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImageWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
