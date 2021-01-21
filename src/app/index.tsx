import React from 'react'
import type { AppProps } from '@app'
import { Document, View } from '@react-pdf/renderer'
import { ThemeProvider } from '@react-pdf/styled-components'
import * as dateFns from 'date-fns'
import {
  Heading,
  Section,
  ListItem,
  WorkPost,
  Resume,
  EducationPost,
  Language,
  Insight,
  TechGroup,
  SocialMedia
} from './components'
import { getTheme } from './theme'
import { Page, Row, Column } from './elements'
import strings from './strings.json'

const leftColumnStyle = {
  marginRight: 16,
  width: '55%'
}

const rightColumnStyle = {
  width: '40%'
}

function formatDate(strDate: string): string {
  return dateFns.format(
    dateFns.parse(strDate, 'yyyy-MM-dd', new Date()),
    'LL/yyyy'
  )
}

export function App({ techProfile, techResume, lang }: AppProps) {
  const s = {
    ...strings.defaults,
    ...strings[lang]
  }

  return (
    <ThemeProvider theme={getTheme(techResume)}>
      <Document
        title={`${techProfile.name} - ${techResume.title}`}
        author={techProfile.name}
        keywords={techResume.keywords}
      >
        <Page size="A4">
          <Heading
            title={techProfile.name}
            subtitle={techResume.title}
            information={{
              phone: techProfile.phone,
              email: techProfile.email,
              website: techProfile.website,
              location: techProfile.location
            }}
          />
          <Row>
            <Column style={leftColumnStyle}>
              <Section title={s['title.workExperience']} spacing={8}>
                {techResume.workExperiences.map(workExperience => {
                  const startAt = formatDate(workExperience.startAt)
                  const endAt = workExperience.endAt
                    ? formatDate(workExperience.endAt)
                    : s['placeholder.endAt']

                  return (
                    <WorkPost
                      key={workExperience.id}
                      title={workExperience.title}
                      companyName={workExperience.company}
                      location={workExperience.location}
                      period={`${startAt} - ${endAt}`}
                      description={workExperience.description}
                    >
                      {workExperience.lines
                        .split('\n')
                        .filter(Boolean)
                        .map((line, i) => (
                          <ListItem key={`${workExperience.id}-line-${i}`}>
                            {line}
                          </ListItem>
                        ))}
                    </WorkPost>
                  )
                })}
              </Section>
            </Column>
            <Column style={rightColumnStyle}>
              <Section title={s['title.aboutMe']} spacing={8}>
                <Resume>{techResume.aboutMe}</Resume>
              </Section>
              <Section title={s['title.education']} spacing={8}>
                {techResume.educationExperiences.map(educationExperience => {
                  const startAt = formatDate(educationExperience.startAt)
                  const endAt = educationExperience.endAt
                    ? formatDate(educationExperience.endAt)
                    : s['placeholder.endAt']

                  return (
                    <EducationPost
                      key={educationExperience.id}
                      title={educationExperience.title}
                      almaMater={educationExperience.almaMater}
                      period={`${startAt} - ${endAt}`}
                      location={educationExperience.location}
                    >
                      {educationExperience.lines
                        .split('\n')
                        .filter(Boolean)
                        .map((line, i) => (
                          <ListItem key={`${educationExperience.id}-line-${i}`}>
                            {line}
                          </ListItem>
                        ))}
                    </EducationPost>
                  )
                })}
              </Section>
              <Section title={s['title.lang']} spacing={12}>
                {techResume.langSkills.map(langSkill => (
                  <Language
                    key={langSkill.id}
                    name={langSkill.name}
                    scoreLabel={langSkill.scoreLabel}
                    score={langSkill.score}
                  />
                ))}
              </Section>
              <Section title={s['title.strengths']} spacing={12}>
                {techResume.strengths.map(strength => (
                  <Insight
                    key={strength.id}
                    title={strength.name}
                    description={strength.description}
                    iconName={strength.icon}
                  />
                ))}
              </Section>
              <Section title={s['title.findMe']} spacing={0}>
                <View style={{ flexDirection: 'row' }}>
                  <SocialMedia
                    name="Twitter"
                    profileUrl={techProfile.twitter}
                    style={{ flex: 1 }}
                  />
                  <SocialMedia
                    name="Github"
                    profileUrl={techProfile.github}
                    style={{ flex: 1 }}
                  />
                  <SocialMedia
                    name="LinkedIn"
                    profileUrl={techProfile.linkedin}
                    style={{ flex: 1 }}
                  />
                </View>
              </Section>
            </Column>
          </Row>
        </Page>
        <Page size="A4">
          <Row>
            <Column style={leftColumnStyle}>
              <Section title={s['title.projects']} spacing={8}>
                {techResume.workProjects.map(workProject => {
                  const startAt = formatDate(workProject.startAt)
                  const endAt = workProject.endAt
                    ? formatDate(workProject.endAt)
                    : s['placeholder.endAt']

                  return (
                    <WorkPost
                      key={workProject.id}
                      title={workProject.title}
                      location={workProject.location}
                      companyName={workProject.company}
                      period={`${startAt} - ${endAt}`}
                      description={workProject.description}
                    >
                      {workProject.lines
                        ?.split('\n')
                        .filter(Boolean)
                        .map((line, i) => (
                          <ListItem key={`${workProject.id}-line-${i}`}>
                            {line}
                          </ListItem>
                        ))}
                    </WorkPost>
                  )
                })}
              </Section>
            </Column>
            <Column style={rightColumnStyle}>
              <Section title={s['title.tech']} spacing={8}>
                {techResume.techGroups.map(techGroup => (
                  <TechGroup
                    key={techGroup.id}
                    title={techGroup.title}
                    tags={techGroup.tags}
                  />
                ))}
              </Section>
            </Column>
          </Row>
        </Page>
      </Document>
    </ThemeProvider>
  )
}
