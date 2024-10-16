import React from 'react'
import {PastProject} from '../../components'
import {split} from 'lodash-es'

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
    desc: '에너지 절감 목표와 공장 에너지 절감 요소를 크롤링 데이터 및 실시간 전력 데이터를 연동해 분석 및 평가하는 시스템 개발',
    lang: ['Spring Boot', 'PostgreSQL', 'ElastiCache', 'S3', 'Python', 'React', 'SCSS', 'CI/CD'],
    tag: split('크롤링,ChatGPT업무에첫적용', ','),
  },
  {
    year: '2024년',
    position: position.etc,
    title: 'Xergy 플랫폼',
    desc: 'PEMS Client/Server, EMS, 전기차충전관리시스템(CSMS), Tracker, VPP 시스템을 통합 운영 및 관리, OCPP 1.6 프로토콜 인증 담당',
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
      'SCSS',
      'CI/CD',
      'Electron',
    ],
    tag: split('지금까지의노하우발산', ','),
  },
  {
    year: '2023년',
    position: position.b,
    title: '디지털트윈 기반의 가스환경설비 통합관제',
    desc: '대용량 데이터를 디지털트윈 시각화하여 도시가스사의 통합 관제 시스템 개발',
    lang: ['Spring Boot', 'PostgreSQL', 'Oracle', 'MySQL', 'HEAVY.ai', 'Mapbox', 'Lit'],
    tag: split('GPUDB', ','),
  },
  {
    year: '2023년',
    position: position.b,
    title: '스마트모바일 하이브리드 앱 개발',
    desc: '도시가스 사의 점검용 어플리케이션 고도화, 카드결제단말기 및 카메라 기능 안드로이드 연동 개발',
    lang: ['Android', 'Javascript', 'HTML', 'CSS'],
    tag: split('GPUDB', ','),
  },
  {
    year: '2022년',
    position: position.f,
    title: 'BIS(Business Intelligence System)',
    desc: '경제성 분석, 단가 추이, 영업 관리 등 데이터를 유동적으로 추출하는 시스템 개발',
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
    tag: split('Redshift,CI/CD도입', ','),
  },
  {
    year: '2022년',
    position: position.etc,
    title: '통합 에너지플랫폼 개발',
    desc: 'EMS, DRMS, PVMS, DERMS, VPP TOC로 구성된 통합 에너지 플랫폼 개발',
    lang: ['Node.js', 'PostgreSQL', 'React', 'Websocket', 'Kafka', 'ElastiCache', 'S3'],
    tag: split('MSA', ','),
  },
]

export const chapters = [
  {
    subtitle: '지난 프로젝트들',
    content: [<PastProject key={`projects-1`} {...projects[0]} />],
  },
  {
    subtitle: '스킬 산맥',
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
  {
    subtitle: '바라건대',
  },
]
