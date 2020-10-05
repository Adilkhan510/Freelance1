import React from 'react'
import { FaGithubAlt, } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { Card, OverLay, Summary, Wrapper, Links, LinksContainer, ProjectLink, TopSection, Title, Line, StackContainer, JsIcon, ReactIcon, DbIcon, NodeIcon, HtmlIcon } from './pastWork.elements'

const PastWork = () => {
    return (
        <Wrapper>
            <Card>
                <TopSection>
                    <Title>
                        Moviemax
                    </Title>
                    <Line></Line>
                    <StackContainer>
                        <JsIcon />
                        <ReactIcon />
                        <DbIcon />
                        <NodeIcon />
                        <HtmlIcon />
                    </StackContainer>
                    <Summary>
                        Hello jhsgkjfgkjshgkfdsggggggggggggggggggggggggggggggkjgfdslfdjgkfdsgjfdlgjfdslgjlkgjslgjflkj
                    </Summary>
                </TopSection>
            </Card>
        </Wrapper>
    )
}

export default PastWork
