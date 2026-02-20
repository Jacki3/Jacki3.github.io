// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Jacki3', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
        external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'LoGaCulture - LUTE',
          description:
            'LoGaCulture brings together the European academic leaders in digital locative experiences. At Bournemouth, I was the lead engineer of a novel development tool: LUTE (a conversion plug-in for Unity).',
          imageUrl:
            '/logaIcon.png',
          link: 'https://logaculture.eu/otc/lute-authoring-tool/',
        },
        {
          title: 'ROLI & BU - EngD',
          description:
            'Engineering Doctorate at Bournemouth University, focusing on game-based learning for music. The video showcases multiple games that were developed in conjunction with ROLI and their development team. ',
          imageUrl:
            '/BUShieldNoBG.png',
          link: 'https://www.youtube.com/watch?v=OaxS5Gq4zk8',
          },
          {
              title: 'LoGaCulture & Bog Games - Replicas',
              description:
                  'A locative heritage game developed at Avebury, where I co-led development alongside a game designer using LUTE. Players navigate the site to uncover its rich history through exploration and discovery.',
              imageUrl:
                  '/portrait_angela.png',
              link: 'https://apps.apple.com/gb/app/replicas/id6747492708',
          },
          {
              title: 'LoGaCulture & Bog Games - Invitation Investigation',
              description:
                  'A family-friendly locative game set at Avebury, where I led the development using LUTE. Players explore the ancient site to help cute animal characters recover their lost invitations and make it to a tea party on time.',
              imageUrl:
                  '/rabbitlineless.png',
              link: 'https://apps.apple.com/gb/app/invitation-investigation/id6747429396',
          },
        {
          title: 'VitaeVR, KCL, Sony & Epic Games - VStore',
          description:
            'Collaboration with VitaeVR, a subsidiary of Outpost VFX, Sony, Epic Games and the KCL psychology department. VStore is a functional cognition VR shopping task created in UE4 (C++ & Blueprints). ',
          imageUrl:
            '/vitaeLogo.png',
            link: 'https://gtr.ukri.org/projects?ref=studentship-2556912',
        },
        {
          title: 'Bog Games - Bridge Wavers',
          description:
            'A first release under the title of Bog Games (my own development/publishing agency). The name is derived from our late black cat and the funky logo was designed lovingly by my wife, Chantelle.',
          imageUrl:
            '/bogLogoTransparent.png',
          link: 'https://example.com',
          },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['LoGaCulture/LUTE', 'LoGaCulture/LUTE-Server', 'Jacki3/Looper', 'Jacki3/Bridge-Wave'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: { title: 'Portfolio of Jack Brett', description: 'Bournemouth University', imageURL: '' },
  social: {
    linkedin: 'jack-brett',
    x: '',
    mastodon: '',
      researchGate: 'Jack-Brett-2',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://staffprofiles.bournemouth.ac.uk/display/jbrett2',
    phone: '',
    email: '',
    googlePhotos: 'https://photos.app.goo.gl/WLdyv6qsks7XeeV87',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'Unity',
    'Godot  ',
    'UE4/5',
    'Visual Scripting',
    'C++',
    'Extended Reality',
    'Console Development',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'HTML',
    'TypeScript',
    '.NET',
    'Blender',
    'Photoshop',
    'Premiere Pro',
    'LaTeX',
    'R',
    ],
    hobbies: [
        'Photography',
        'Cycling',
        'Keyboard/Piano',
        'Volunteering',
        'Poetry',
        'Astronomy',
        'Tech Tinkering',
    ],  
  experiences: [
    {
      company: 'Bournemouth University - LoGaCulture',
      position: 'Postdoctoral Research Assistant in Authoring Tools for Locative Games',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://logaculture.eu',
    },
    {
      company: 'ROLI - Bournemouth University',
      position: 'Research Engineer and Doctoral Student',
      from: 'October 2019',
      to: 'December 2023',
      companyLink: 'https://roli.com',
      },
      {
          company: 'Vitae VR - King\'s College London',
          position: 'Lead Research Developer',
          from: 'December 2017',
          to: 'July 2022',
          companyLink: 'https://roli.com',
      },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Bournemouth  University',
          degree: 'Engineering Doctorate ' ,
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Bournemouth University',
      degree: 'Games Technology (First Class Honours BSc)',
      from: '2014',
      to: '2017',
    },
  ],
  publications: [
    {
      title: 'LUTE: A Hypertextual Mixed Reality Game Engine',
          conferenceName: 'ACM Hypertext ’25',
      journalName: '',
      authors: 'Jack Brett, Charlie Hargood, David Millard, Bob Rimington',
          link: 'https://dl.acm.org/doi/10.1145/3720553.3746666',
          description:
          'Hypertext and games research have long been intertwined; both as understanding games as a form of hypertext, and also through identifying ludic interactions and patterns in hypermedia. While this research often seeks to understand theoretical and structural connections, in this paper we seek to go beyond these to build an explicitly hypertextual game engine. We target Mixed Reality (MR) and locative games for our engine as media that have been previously identified as well-suited to sculptural hypertext, and demonstrate the value of hypertextual patterns and structures as part of a game creation toolkit. In this paper we present LUTE (LoGaCulture Unity Toolkit Engine), a technology framework built on top of the Unity 3D game engine for the creation of MR games and locative experiences. LUTE builds on the established state of the art in both MR games and Creativity Support Tools (CSTs) with a modular design that uses hypertextual structures to handle the flow of content nodes in the game, and a declarative order system to specify gameplay in those nodes.'
    },
    {
      title: 'Understanding Attitudes on Mixed Reality Heritage',
        conferenceName: 'NHT’25 Workshop at ACM Hypertext 2025',
      journalName: '',
        authors: 'Jack Brett, Natalia Adamczewska ',
        link: 'https://nht.ecs.soton.ac.uk/2025/papers/2-jbrett.pdf',
        description:
      'As Hypertext is applied to new domains and areas the potential for mixed reality Hypertext at culture heritage sites is increasingly evidenced. As with many other applications of Hypertext this in turn creates a need for accessible and powerful authoring tools for creating mixed reality experiences. In the spirit of both user centric and product centric design we seek to inform future technologies supporting mixed reality hypertext and games for cultural heritage by exploring both player and designer attitudes towards mixed reality and authoring tools. We present our findings from three studies exploring these attitudes, a survey of players (n=52), a set of interviews with players (n=12), and indepth interviews with mixed reality designers (n=5). Findings reinforced expectations for educational and functional experiences, with a shared preference for real-world history, but also collection patterns of play, and social experiences.'
      },
      {
          title: 'Authoring Tools for Mixed Reality',
          conferenceName: 'NHT’23 Workshop at ACM Hypertext 2023',
          journalName: '',
          authors: 'Jack Brett, Charlie Hargood',
          link: 'https://eprints.bournemouth.ac.uk/38928/1/BrettHargood23NHT.pdf',
          description:
          'This work explores the need for a comprehensive understanding of best practices in mixed reality storytelling authoring tools. With the rapid development and increasing adoption of mixed reality tech- nologies, there is a growing demand for effective tools that enable the creation of compelling and immersive narratives. To address this need, a literature review was conducted that encompassed three key areas: Games, Interactive Digital Narratives (IDN), and eXtended Reality Installations (XRIs). By synthesizing the consensus on best practices from these diverse domains, this paper aims to provide valuable insights into the design and development of mixed real- ity storytelling authoring tools. The review of literature revealed a range of perspectives and approaches in each domain. Based on this analysis, a survey of existing mixed reality storytelling authoring tools, highlighting their strengths, weaknesses, and notable features is presented. By examining the principles that underlie these tools, key design considerations for creating effective authoring tools was established.'
      },
      {
          title: 'Graveyard Symphony; A Study Investigating the Effectiveness of a Prototype Music Game',
          conferenceName: '',
          journalName: 'ACM Games: Research and Practice',
          authors: 'Jack Brett, Christos Gatzidis, Tom Davis',
          link: 'https://dl.acm.org/doi/10.1145/3703410',
          description:
          'Learning to play a musical instrument, particularly the keyboard, can be challenging for adults who are beginners or have previously given up due to a lack of foundational skills and engaging practice methods. To address this issue, we have developed prototype games aimed at honing specific musical skills. Through several pilot studies, it became evident that assessing the effectiveness of video game experiences in skill acquisition compared to traditional practice methods was essential. Therefore, we hypothesised that video games could encourage sustained practice and reduce dropout rates among beginners. Consequently, our focus shifted to creating games centred on sheet music reading, specifically matching musical staff positions to keyboard keys.'
      },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
