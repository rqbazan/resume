import React from 'react'
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

function isLast(arr, index) {
  return index + 1 === arr.length
}

function formatDate(strDate) {
  return dateFns.format(
    dateFns.parse(strDate, 'yyyy-MM-dd', new Date()),
    'LL/yyyy'
  )
}

export function App({ techProfile, techResume, lang }) {
  const s = {
    ...strings.default,
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
              <Section title={s['title.workExperience']}>
                {techResume.workExperiences.map((workExperience, index) => {
                  const mb = isLast(techResume.workExperiences, index) ? 0 : 8
                  const startAt = formatDate(workExperience.startAt)
                  const endAt = workExperience.endAt
                    ? formatDate(workExperience.endAt)
                    : s['placeholder.endAt']

                  return (
                    <WorkPost
                      key={workExperience.id}
                      style={{ marginBottom: mb }}
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
              <Section title={s['title.aboutMe']}>
                <Resume>{techResume.aboutMe}</Resume>
              </Section>
              <Section title={s['title.education']}>
                {techResume.educationExperiences.map(
                  (educationExperience, index) => {
                    const mb = isLast(techResume.educationExperiences, index)
                      ? 0
                      : 8
                    const startAt = formatDate(educationExperience.startAt)
                    const endAt = educationExperience.endAt
                      ? formatDate(educationExperience.endAt)
                      : s['placeholder.endAt']

                    return (
                      <EducationPost
                        key={educationExperience.id}
                        style={{ marginBottom: mb }}
                        title={educationExperience.title}
                        almaMater={educationExperience.almaMater}
                        period={`${startAt} - ${endAt}`}
                        location={educationExperience.location}
                      >
                        {educationExperience.lines
                          .split('\n')
                          .filter(Boolean)
                          .map((line, i) => (
                            <ListItem
                              key={`${educationExperience.id}-line-${i}`}
                            >
                              {line}
                            </ListItem>
                          ))}
                      </EducationPost>
                    )
                  }
                )}
              </Section>
              <Section title={s['title.lang']}>
                {techResume.langSkills.map((langSkill, index) => {
                  const mb = isLast(techResume.langSkills, index) ? 0 : 12

                  return (
                    <Language
                      key={langSkill.id}
                      style={{ marginBottom: mb }}
                      name={langSkill.name}
                      scoreLabel={langSkill.scoreLabel}
                      score={langSkill.score}
                    />
                  )
                })}
              </Section>
              <Section title={s['title.strengths']}>
                {techResume.strengths.map((strength, index) => {
                  const mb = isLast(techResume.strengths, index) ? 0 : 12

                  return (
                    <Insight
                      key={strength.id}
                      style={{ marginBottom: mb }}
                      title={strength.name}
                      description={strength.description}
                      iconName={strength.icon}
                    />
                  )
                })}
              </Section>
              <Section title={s['title.findMe']}>
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
              <Section title={s['title.projects']}>
                {techResume.workProjects.map((workProject, index) => {
                  const mb = isLast(techResume.workProjects, index) ? 0 : 8
                  const startAt = formatDate(workProject.startAt)
                  const endAt = workProject.endAt
                    ? formatDate(workProject.endAt)
                    : s['placeholder.endAt']

                  return (
                    <WorkPost
                      key={workProject.id}
                      style={{ marginBottom: mb }}
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
              <Section title={s['title.tech']}>
                {techResume.techGroups.map((techGroup, index) => {
                  const mb = isLast(techResume.techGroups, index) ? 0 : 8

                  return (
                    <TechGroup
                      key={techGroup.id}
                      style={{ marginBottom: mb }}
                      title={techGroup.title}
                      tags={techGroup.tags}
                    />
                  )
                })}
              </Section>
            </Column>
          </Row>
        </Page>
      </Document>
    </ThemeProvider>
  )
}
