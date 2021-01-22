import * as React from 'react'
import type { AppProps } from '@app'
import { Document, View } from '@react-pdf/renderer'
import { ThemeProvider } from '@react-pdf/styled-components'
import { StringsProvider, useStrings } from './hooks/use-strings'
import { Heading } from './components/heading'
import { Section } from './components/section'
import { ListItem } from './components/list-item'
import { WorkPost } from './components/work-post'
import { Resume } from './components/resume'
import { EducationPost } from './components/education-post'
import { Language } from './components/language'
import { Insight } from './components/insight'
import { TechGroup } from './components/tech-group'
import { SocialMedia } from './components/social-media'
import { Watermark } from './components/Watermark'
import { Page, Row, Column } from './elements'
import { getTheme } from './theme'

const leftColumnStyle = {
  marginRight: 16,
  width: '55%'
}

const rightColumnStyle = {
  width: '40%'
}

export function App({ techProfile, techResume }: AppProps) {
  const s = useStrings()

  return (
    <Document
      title={`${techProfile.name} - ${techResume.title}`}
      author={techProfile.name}
      keywords={techResume.keywords}
    >
      <Page size="A4">
        <Watermark />
        <Heading
          title={techProfile.name}
          subtitle={techResume.title}
          avatarUrl={techResume.avatarUrl}
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
              {techResume.workExperiences.map(workExperience => (
                <WorkPost
                  key={workExperience.id}
                  title={workExperience.title}
                  companyName={workExperience.company}
                  location={workExperience.location}
                  startAt={workExperience.startAt}
                  endAt={workExperience.endAt}
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
              ))}
            </Section>
          </Column>
          <Column style={rightColumnStyle}>
            <Section title={s['title.aboutMe']} spacing={8}>
              <Resume>{techResume.aboutMe}</Resume>
            </Section>
            <Section title={s['title.education']} spacing={8}>
              {techResume.educationExperiences.map(educationExperience => (
                <EducationPost
                  key={educationExperience.id}
                  title={educationExperience.title}
                  almaMater={educationExperience.almaMater}
                  startAt={educationExperience.startAt}
                  endAt={educationExperience.endAt}
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
              ))}
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
        <Watermark />
        <Row>
          <Column style={leftColumnStyle}>
            <Section title={s['title.projects']} spacing={8}>
              {techResume.workProjects.map(workProject => (
                <WorkPost
                  key={workProject.id}
                  title={workProject.title}
                  location={workProject.location}
                  companyName={workProject.company}
                  startAt={workProject.startAt}
                  endAt={workProject.endAt}
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
              ))}
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
  )
}

export const AppProvider: React.FC<AppProps> = props => {
  return (
    <ThemeProvider theme={getTheme(props.techResume)}>
      <StringsProvider lang={props.lang}>
        <App {...props} />
      </StringsProvider>
    </ThemeProvider>
  )
}
