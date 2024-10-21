import React, {Children} from 'react'
import {PastProject, SkillMountain, PossibleScope, WorkStyle} from '../../components'
import {split, map, reverse} from 'lodash-es'

export const names = ['서예림', 'Seo Yelim', 'Veronica']

export const position = {
  b: 'Backend',
  f: 'Frontend',
  pl: 'PL',
  etc: '맥가이버',
}

export const projects = [
  {
    year: '2024년',
    position: position.b,
    title: '산업단지에너지관리시스템(CEMS)',
    desc: '파워플래너 데이터와 실시간 전력데이터를 기반으로 에너지 절감 가이드 시스템 개발',
    main: ['화면, API 개발 관리', '파워플래너 크롤링 담당', '데이터 집계 로직 담당'],
    lang: [
      'Spring Boot',
      'PostgreSQL',
      'Querydsl',
      'JPA',
      'MyBatis',
      'ElastiCache',
      'S3',
      'Python',
      'React',
      'Sass',
      'CI/CD',
    ],
    tag: split('크롤링,ChatGPT', ','),
  },
  {
    year: '2024년',
    position: position.etc,
    title: 'Xergy 플랫폼',
    desc: '5개의 단위시스템 시스템으로 구성된 에너지 통합 운영시스템 개발',
    main: [
      'OCPP 1.6 프로토콜 인증',
      '프로젝트 관리',
      '플랫폼 전용 컴포넌트 개발',
      'API 개발',
      '데이터 에이전트 개발',
    ],
    lang: [
      'Spring Boot',
      'PostgreSQL',
      'Querydsl',
      'JPA',
      'ElastiCache',
      'S3',
      'Node.js',
      'React',
      'Kafka',
      'MQTT',
      'WebSocket',
      'Docker',
      'Sass',
      'CI/CD',
      'Electron',
      'Stroybook',
    ],
    tag: split('MSA,아키텍처설계,자체컴포넌트모듈개발,모노레포방식도입', ','),
    link: 'https://protective-bolt-eb7.notion.site/Xergy-79ac1ab9753f46409e72b04a0f1b06a8?pvs=4'
  },
  {
    year: '2023년',
    position: position.b,
    title: '디지털트윈 기반의 가스환경설비 통합관제',
    desc: '대용량 데이터를 디지털트윈 시각화하여 도시가스사의 통합 관제 시스템 개발',
    main: ['프로젝트 관리', '통합인증 API 개발', '화면 개발'],
    lang: ['Spring Boot', 'PostgreSQL', 'JPA', 'Oracle', 'MySQL', 'HEAVY.ai', 'Mapbox', 'Lit'],
    tag: split('GPUDB,새로운기술테스트', ','),
  },
  {
    year: '2023년',
    position: position.b,
    title: '스마트모바일 하이브리드 앱 개발',
    desc: '도시가스 사의 점검용 어플리케이션 고도화, 카드결제단말기 및 카메라 기능 안드로이드 연동 개발',
    main: ['프로젝트 관리', '안드로이드 앱 개발', '통합인증 시스템 개발'],
    lang: ['Android', 'Javascript', 'HTML', 'CSS'],
    tag: split('안드로이드개발,하이브리드앱', ','),
  },
  {
    year: '2022년',
    position: position.f,
    title: 'BIS(Business Intelligence System)',
    desc: '경제성 분석을 위한 대용량 데이터 추출 시스템 개발',
    main: ['프로젝트 관리', '인프라 구축', '화면 개발'],
    lang: [
      'Node.js',
      'PostgreSQL',
      'AWS Redshift',
      'React',
      'Websocket',
      'Kafka',
      'ElastiCache',
      'S3',
    ],
    tag: split('Redshift,CI/CD도입,React상태관리이슈', ','),
  },
  {
    year: '2022년',
    position: position.etc,
    title: '통합 에너지플랫폼 개발',
    desc: 'EMS, DRMS, PVMS, DERMS, VPP TOC로 구성된 통합 에너지 플랫폼 개발',
    main: ['화면 개발', '운영유지보수'],
    lang: ['Node.js', 'PostgreSQL', 'React', 'Websocket', 'Kafka', 'ElastiCache', 'S3'],
    tag: split('MSA,에너지산업이해', ','),
  },
  {
    year: '~ 2022년',
    position: position.etc,
    title: '포털 및 업무시스템 개발',
    desc: '학교, 정부기관 대상의 포털 및 업무시스템 개발',
    main: ['API 개발', '화면 개발', '운영유지보수', '인터페이스 개발'],
    lang: ['Spring', 'Oracle', 'Javascript', 'Jquery', 'Html', 'CSS'],
    tag: split('사업관리,전반적인 기술 습득', ','),
  },
]

export const skills = [
  {
    id: 'Framework',
    pos: [-10, 1.2, 3],
    items: [
      'SpringBoot',
      'React',
      'ReactNative',
      'Webpack',
      'Ionic',
      'Flutter',
      'Vue.js',
      'Android',
      'AngularJs',
      'Next.js',
    ],
  },
  {
    id: 'Language',
    pos: [-5, 1.2, -2],
    items: ['Typescript', 'Javascript', 'Java', 'C++', 'Node.js', 'Python'],
  },
  {
    id: 'ETC',
    pos: [0, 1.2, 4],
    items: ['Redis', 'Kafka', 'Celery', 'Redux', 'Gulp.js', 'Jquery'],
  },
  {
    id: 'Infra/Web/WAS',
    pos: [5, 1.2, 0],
    items: [
      'AWS',
      'Docker',
      'CI/CD',
      'Linux',
      'Ubuntu',
      'Tomcat',
      'PM2',
      'Jeus',
      'Jboss',
      'Nginx',
      'Weblogic',
      'Resin',
    ],
  },
  {
    id: 'Repository',
    pos: [10, 1.2, 6],
    items: ['Git', 'SVN'],
  },
]

export const scopes = [
  {
    title: '서비스 개발',
    contents: `서비스 대상 사용자나 실행 환경이 매번 달라 제로베이스 프로젝트를 여러번 진행했습니다.<br/>
    여러 경험을 통해 <em>서비스의 목적과 기획자의 의도를 충분히 이해해 스스로 사고</em>하여 서비스를 구축하는 것이 중요하다고 생각합니다. <br/>
    서비스에 따른 개발환경구성과 대상 사용자를 고려한 UI/UX 최적화를 가장 중요하게 여기고 있습니다.<br/>
    `,
  },
  {
    title: '프로젝트 관리',
    contents: `스타트업 특성상 애자일 방법론으로 요구사항정의 > 엔티티 정의 > 기능 설계 > DB 설계 > 프로그램 설계 > 퍼블리싱 > API 개발 > API 연동 순으로 업무를 반복 진행하고,<br/>
    각 단계별 시니어, 주니어 개발자들의 역량을 고려해 개발 일정 계획을 수립했습니다.<br/>
    주차별 스프린트로 리스크를 관리하고, 개발자들간의 토론과 인상적이었던, 또는 실패의 경험을 공유하는 문화를 만들었습니다.<br/>
    개발자로써 수행할 수 있는 개발 능력은 물론이고, 동료 개발자들과의 <em>좋은 시너지를 만들어 높은 퀄리티로 일정내 납기</em>를 할 수 있는 개발자가 되기 위해 항상 노력중입니다.`,
  },
  {
    title: '개발자 교육 및 양성',
    contents: `다양하고 많은 주니어, 시니어를 교육해보진 못했지만 저를 스쳐간 분들을 통해 어떤식으로 교육 해야되는지 알게 되었습니다.<br/>
    개발자 교육에 있어서 어떤것을 잘하고, 못하는지 개발자에게 알려주는 것이 중요하다고 생각합니다.<br/>
    특히 주니어분들은 뭔가 모르고 있는게 확실한데, 정확하게 뭐가 문제인지 모르는 경우가 많았습니다. <br/>
    또한, 관리자로써 개발자의 능력능 정확하게 파악해 업무를 분담할때 어떤 사람과 함께하면 좋을지 판단할 수 있습니다.<br/>
    <em>저는 개발자분들을 교육하고 양성하는 업무가 즐겁습니다.</em> 앞으로도 다양한분들은 만나 좀 더 체계적인 방법을 만들어가고 싶습니다.
    `,
  },
  {
    title: '서버 및 인프라 관리',
    contents: `Linux, Ubuntu 환경에서 서버 셋팅하고, Web/WAS 설치 할 수 있으며,<br/>VPN 같은 네트워크 서비스도 셋팅 할 수 있습니다.<br/>
     폐쇄망 환경에서 개발해본 경험도 있으며, AWS내에 VPC, EC2, ECS, ECR, RDS, ElastiCache, IoT, Lambda, ALB, S3와 같은 서비스를 이용했으며, 직접 설정도 할 수 있습니다.<br/>
    네트워크에 대한 이해가 깊다고 자부할 수는 없지만 <em>전체적인 개념과 용도</em>를 알고 있어, 서비스에 문제가 발생했을때 <em>개발소스 범주 밖에 여러 다양한 이슈들을 고려할 수 있는 시야</em>를 가졌습니다.<br/>
    몇년전부터 배포시 발생하는 인적 장애를 줄이기 위해, AWS ECS Fargate을 활용한 CI/CD도 적용하여, 현재까지 사용하고 있습니다.
    `,
  },
  {
    title: '운영 유지보수',
    contents: `사람이 늙듯이 시스템도 늙습니다.<br/>
    언제나 시스템은 레거시가 되기 때문에 저는 <em>오래된 빈티지 가구처럼 오래시간 흘러도 누가봐도 흉하지 않은 시스템</em>을 만들고 싶습니다.<br/>
    그러기위해서는 <em>운영 유지보수가 용이한 소스코드와 프로젝트 구조, 서버 구조</em>가 중요합니다.<br/>
    단정하게 작성된 소스코드와 혼돈되지 않은 구조는 오랜 시간 흘러 다양한 사람이 거쳐간다고 해도 그 틀이 크게 벗어나지 않습니다. <br/>
    또한 시스템 개발과 운영 유지보수를 대비하여 준비해야됩니다.<br/>
    보통 프로젝트 완료와 동시에 운영은 바로 진행됩니다.<br/>
    그래서 서비스 개발하면서 운영 시 주의해야되는 점과 히스토리 등을 문서화하여 사전에 발생할 수 있는 리스크를 관리해야됩니다.<br/>
    저는 노션으로 프로그램 설계서를 작성하면서 운영시 참고할 수 있는 노트도 함께 기재하고 있습니다.
    `,
  },
]

export const styles = [
  {
    name: '일하는 방식',
    contents: `일하는 방식 

    개발할때 로직을 먼저 생각하고 착수하는 편입니다.
    주로 어떤식으로 개발할지 방향을 정하고, 
    발생할 수 있는 이슈를 생각하면서 보완하고 있습니다.
    그리고 동료들에게 정리한 내용을 공유해 가벼운 동료평가를 하고 있습니다.
    그러다보면 제가 생각하지 못했던 것들도 고려할 수 있게 됩니다.

    개발할때 문제가 발생하면 먼저 공식 문서부터 확인하고, 그 후 테스트해도 해결되지 않으면 구글링을 해봅니다.
    그래도 해결되지 않는 문제는 사용하고 있는 모듈을 파악해 버그를 확인합니다.
    만약 해결되지 않는 문제이거나 시간이 너무 많이 걸릴 것 같은 상황의 경우 원인이 되는 화면 구조를 변경합니다.

    저는 개발자는 디자이너의 좋은 도구가 되어야한다고 생각합니다.
    기술적 제약이 없는한 디자이너의 의도를 정확하게 표현하는게 좋은 개발자라고 생각합니다.
    그런 자세로 임하면 최종적으로 사용자들에게 좋은 경험이 쌓여, 좋은 시스템으로 발전할 수 있다고 믿고 있습니다.
  `,
  },
  {
    name: '중요한 것들',
    contents: `중요한 것들
    
    제가 개발할때 중요하다고 생각하는건 '문서화'입니다.
    저는 보통 기능 설계가 완료 된 후 프로그램 설계서를 노션에 작성해 담당 개발자를 매핑하고 있습니다.
    담당자는 진행하면서 질문사항, 변경 이력 등을 프로그램 설계서에 댓글로 작성합니다.
    그리고 개발자가 많은 자료를 찾지 않아도 프로그램 설계서만 보면 이해할 수 있도록 기획의 관점의 기능내용과
    개발 관점의 기능내용을 요약해서 작성합니다.
    담당 개발자는 처리한 내용이나 Request, Response Body 등을 정의합니다.
    
    이처럼 저에게 문서는 효율적인 의사소통중에 하나입니다.
    제 경험상, 회의를 하더라도 모든 사람들이 같은 내용으로 이해하지 않는다는걸 알고 있어서
    회의로 결정된 사항들은 문서로 남겨 확인 절차를 한번더 갖고 있습니다.
    
    하지만 반대로 소스코드에는 주석을 남기지 않고 있습니다.
    주석으로 히스토리를 남기다보면 직관적이게 수정한 내용들을 확인 할 수 있지만 구체적인 내용을 담기에는 한계가 있고,
    시간이 지난수록 유효한 주석과 유효하지 않는 주석들이 섞이면서 관리가 안되는걸 경험했기 때문입니다.
    그래서 저는 소스코드는 설명하지 않아도 이해할 수 있는 단순한 구조로 구현하고,
    히스토리는 별도의 문서로 공유하는 방식을 선호하고 있습니다.
    `,
  },
  {
    name: '강점과 장점',
    contents: `강점과 장점
    
    저의 강점은 '책임감' 입니다. 개발자의 밸류는 주인의식에 생긴다고 생각하고 있습니다.
    요즘말로 주인이 아닌데 어떻게 주인의식이 생기냐고 하지만, 
    저는 조금 생각이 다릅니다.
    
    개발자가 가장 빠르게 성장할 수 있는 방법은 많은 경험을 몰입해서 겪어보는 것인데,
    이건 어떻게 보면 회사를 통해 개인이 성장할 수 있는 값진 기회라고 생각합니다.
    회사일을 개인 사업처럼 임해 책임감있게 하다보면 분명 '내 것'이 되어 있을 것이고,
    결국 저에게 좋은 밑거름이 될 것이라고 믿고 있습니다.
    그래서 저는 저를 성장시키기 위해 항상 책임감있게 수행하고 있습니다.
    
    저의 장점은 MBTI가 'ENFJ'라는 것입니다.
    저는 다정하고 다른 사람의 말을 귀 기울려 공감해줄수 있습니다.
    또한 꽤나 계획적이라 업무에 있어서도 꼼꼼한 편입니다. (완벽한 J는 아닙니다ㅎㅎ)
    게다가 회사 생활을 오래해서 그런지 가끔 'T'스러운 결정을 합니다.
    그래서 제가 생각했을때, 제 성격은 회사 생활에 있어서 가장 적합한 인재상이 아닐까 싶습니다.
    `,
  },
  {
    name: '코딩 스타일',
    children: [
      {
        name: 'React',
        contents: `
        1. eslint, prettier 사용한다.
        2. 주석으로 소스 코드를 설명하지 않는다.
        3. render가 여러번 발생하지 않도록 테스트 한다.
        4. 화면은 단순한 구조로 규격만 만들고, 구체적인 기능은 컴포넌트에서 처리한다.
        5. 상수(const)와 데이터 구조(structure)는 따로 관리한다.
        6. 재사용성을 고려한다.
        7. 삼항연산자를 너무 많이 중첩해서 사용하지 않는다.
        8. 조건문은 1줄짜리라도 괄호를 사용한다.
        9. 인덴트를 깔끔하게 한다.
        `,
      },
      {
        name: 'Node.js',
        contents: `
        1. 상수는 대문자로 쓴다.
        2. const, let을 구분해서 쓴다.
        3. Typescript는 Type을 정의한다.
        `,
      },
      {
        name: 'Java',
        contents: `
        1. 메모리를 효율적으로 쓸수 있도록 한다.
        2. 추상클래스, 인터페이스를 용도에 맞게 사용한다.
        3. 비동기 처리가 필요한지 고민한다.
        `,
      },
    ],
  },
]

export const chapters = [
  {
    subtitle: '지난 프로젝트들',
    layout: 'card',
    content: (
      <>
        {map(projects, (p, idx) => (
          <PastProject key={`projects-${idx}`} {...p} />
        ))}
      </>
    ),
  },
  {
    subtitle: '스킬 산맥',
    layout: 'mountain',
    content: <SkillMountain skills={skills} />,
  },
  {
    subtitle: '가능한 업무 범위',
    layout: 'possible',
    content: <PossibleScope scopes={reverse(scopes)} />,
  },
  {
    subtitle: '업무 스타일',
    layout: 'work',
    content: <WorkStyle styles={styles} />,
  },
  {
    subtitle: 'Tmi',
  },
]
