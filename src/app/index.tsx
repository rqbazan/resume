import type { Lang, TechProfile, TechResume } from '~/types'
import { Document, View, StyleSheet, Page } from '~/react-pdf'
import { ThemeProvider, StringsProvider, useStrings } from './hooks'
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
  SocialMedia,
  Watermark,
  IconName,
} from './ui'
import { createTheme } from './theme'

export interface AppDocumentProps {
  techProfile: TechProfile
  techResume: TechResume
}

export interface AppProps extends AppDocumentProps {
  lang: Lang
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
  },
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
  },
  rightColumn: {
    flexGrow: 1,
    width: '40%',
  },
})

function AppDocument({ techProfile, techResume }: AppDocumentProps) {
  const s = useStrings()

  return (
    <Document
      title={`${techProfile.name} - ${techResume.title}`}
      author={techProfile.name}
      keywords={techResume.keywords}
    >
      <Page size="A4" style={styles.page}>
        <Watermark />
        <Heading
          title={techProfile.name}
          subtitle={techResume.title}
          avatarUrl={techResume.avatarUrl}
          information={{
            phone: techProfile.phone,
            email: techProfile.email,
            website: techProfile.website,
            location: techProfile.location,
          }}
        />
        <View style={styles.row}>
          <View style={styles.leftColumn}>
            <Section title={s['title.workExperience']} spacing={8}>
              {techResume.workExperiences.map((workExperience) => (
                <WorkPost
                  key={workExperience.id}
                  title={workExperience.title}
                  companyName={workExperience.company}
                  companyUrl={workExperience.companyUrl}
                  location={workExperience.location}
                  startAt={workExperience.startAt}
                  endAt={workExperience.endAt}
                  description={workExperience.description}
                >
                  {workExperience.lines
                    ?.split('\n')
                    .filter(Boolean)
                    .map((line, i) => (
                      <ListItem key={`${workExperience.id}-line-${i}`}>
                        {line}
                      </ListItem>
                    ))}
                </WorkPost>
              ))}
            </Section>
          </View>
          <View style={styles.rightColumn}>
            <Section title={s['title.aboutMe']} spacing={8}>
              <Resume>{techResume.aboutMe}</Resume>
            </Section>
            <Section title={s['title.education']} spacing={8}>
              {techResume.educationExperiences.map((educationExperience) => (
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
              {techResume.langSkills.map((langSkill) => (
                <Language
                  key={langSkill.id}
                  name={langSkill.name}
                  scoreLabel={langSkill.scoreLabel}
                  score={langSkill.score}
                />
              ))}
            </Section>
            <Section title={s['title.strengths']} spacing={12}>
              {techResume.strengths.map((strength) => (
                <Insight
                  key={strength.id}
                  title={strength.name}
                  description={strength.description}
                  iconName={strength.icon as IconName}
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
          </View>
        </View>
      </Page>
      {techResume.workProjects?.length ? (
        <Page size="A4" style={styles.page}>
          <Watermark />
          <View style={styles.row}>
            <View style={styles.leftColumn}>
              <Section title={s['title.projects']} spacing={8}>
                {techResume.workProjects?.map((workProject) => (
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
            </View>
            <View style={styles.rightColumn}>
              <Section title={s['title.tech']} spacing={8}>
                {techResume.techGroups?.map((techGroup) => (
                  <TechGroup
                    key={techGroup.id}
                    title={techGroup.title}
                    tags={techGroup.tags}
                  />
                ))}
              </Section>
            </View>
          </View>
        </Page>
      ) : null}
    </Document>
  )
}

export function App({ lang, techResume, techProfile }: AppProps) {
  const theme = createTheme({ primaryColor: techResume.primaryColor })

  return (
    <ThemeProvider theme={theme}>
      <StringsProvider lang={lang}>
        <AppDocument techResume={techResume} techProfile={techProfile} />
      </StringsProvider>
    </ThemeProvider>
  )
}
