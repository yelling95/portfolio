import React from 'react'
import {PastProject, SkillMountain} from '../../components'
import {split, map} from 'lodash-es'

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
    lang: ['Spring Boot', 'PostgreSQL', 'ElastiCache', 'S3', 'Python', 'React', 'Sass', 'CI/CD'],
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
  },
  {
    year: '2023년',
    position: position.b,
    title: '디지털트윈 기반의 가스환경설비 통합관제',
    desc: '대용량 데이터를 디지털트윈 시각화하여 도시가스사의 통합 관제 시스템 개발',
    main: ['프로젝트 관리', '통합인증 API 개발', '화면 개발'],
    lang: ['Spring Boot', 'PostgreSQL', 'Oracle', 'MySQL', 'HEAVY.ai', 'Mapbox', 'Lit'],
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
  },
  {
    subtitle: '업무 스타일',
  },
  {
    subtitle: 'Tmi',
  },
]
