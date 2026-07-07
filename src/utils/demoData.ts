import { Teacher, Classroom, Workload } from '../types';

// Unique list of all teachers at SMPN 1 Manonjaya from the provided document (50 core teachers + fallback team roles)
export const DEMO_TEACHERS: Teacher[] = [
  { id: 't_elis_n', name: 'Elis N', nip: '-', code: 'ELN', maxJpPerDay: 10 },
  { id: 't_imas', name: 'Imas', nip: '-', code: 'IMS', maxJpPerDay: 10 },
  { id: 't_hana', name: 'Hana', nip: '-', code: 'HN', maxJpPerDay: 10 },
  { id: 't_nendah', name: 'Nendah', nip: '-', code: 'NDH', maxJpPerDay: 10 },
  { id: 't_noneng', name: 'Noneng', nip: '-', code: 'NNG', maxJpPerDay: 10 },
  { id: 't_h_yadi', name: 'H. Yadi', nip: '-', code: 'HYD', maxJpPerDay: 10 },
  { id: 't_hj_ika', name: 'Hj. Ika', nip: '-', code: 'HIK', maxJpPerDay: 10 },
  { id: 't_hj_nina', name: 'Hj. Nina', nip: '-', code: 'HNN', maxJpPerDay: 10 },
  { id: 't_elis_m', name: 'Elis M', nip: '-', code: 'ELM', maxJpPerDay: 10 },
  { id: 't_ayi', name: 'Ayi', nip: '-', code: 'AYI', maxJpPerDay: 10 },
  { id: 't_yulia', name: 'Yulia', nip: '-', code: 'YL', maxJpPerDay: 10 },
  { id: 't_tati', name: 'Tati', nip: '-', code: 'TT', maxJpPerDay: 10 },
  { id: 't_dadang', name: 'Dadang', nip: '-', code: 'DDG', maxJpPerDay: 10 },
  { id: 't_lisa', name: 'Lisa', nip: '-', code: 'LS', maxJpPerDay: 10 },
  { id: 't_lina', name: 'Lina', nip: '-', code: 'LNA', maxJpPerDay: 10 },
  { id: 't_rafli', name: 'Rafli', nip: '-', code: 'RF', maxJpPerDay: 10 },
  { id: 't_m_iqbal', name: 'M Iqbal', nip: '-', code: 'MI', maxJpPerDay: 10 },
  { id: 't_hilda', name: 'Hilda', nip: '-', code: 'HL', maxJpPerDay: 10 },
  { id: 't_sindi', name: 'Sindi', nip: '-', code: 'SD', maxJpPerDay: 10 },
  { id: 't_tata', name: 'Tata', nip: '-', code: 'TAT', maxJpPerDay: 10 },
  { id: 't_yani', name: 'Yani', nip: '-', code: 'YN', maxJpPerDay: 10 },
  { id: 't_n_tenta', name: 'N. Tenta', nip: '-', code: 'NT', maxJpPerDay: 10 },
  { id: 't_ikeu', name: 'Ikeu', nip: '-', code: 'IK', maxJpPerDay: 10 },
  { id: 't_rita', name: 'Rita', nip: '-', code: 'RT', maxJpPerDay: 10 },
  { id: 't_nida', name: 'Nida', nip: '-', code: 'ND', maxJpPerDay: 10 },
  { id: 't_eni', name: 'Eni', nip: '-', code: 'EN', maxJpPerDay: 10 },
  { id: 't_hermawati', name: 'Hermawati', nip: '-', code: 'HM', maxJpPerDay: 10 },
  { id: 't_nurul', name: 'Nurul', nip: '-', code: 'NR', maxJpPerDay: 10 },
  { id: 't_bahtiar', name: 'Bahtiar', nip: '-', code: 'BH', maxJpPerDay: 10 },
  { id: 't_feri', name: 'Feri', nip: '-', code: 'FR', maxJpPerDay: 10 },
  { id: 't_h_usep', name: 'H. Usep', nip: '-', code: 'HUS', maxJpPerDay: 10 },
  { id: 't_dewi', name: 'Dewi', nip: '-', code: 'DW', maxJpPerDay: 10 },
  { id: 't_idik', name: 'Idik', nip: '-', code: 'ID', maxJpPerDay: 10 },
  { id: 't_n_dede', name: 'N. Dede', nip: '-', code: 'NDD', maxJpPerDay: 10 },
  { id: 't_ali', name: 'Ali', nip: '-', code: 'AL', maxJpPerDay: 10 },
  { id: 't_yuni', name: 'Yuni', nip: '-', code: 'YU', maxJpPerDay: 10 },
  { id: 't_lenie', name: 'Lenie', nip: '-', code: 'LNE', maxJpPerDay: 10 },
  { id: 't_komariah', name: 'Komariah', nip: '-', code: 'KM', maxJpPerDay: 10 },
  { id: 't_hj_ida', name: 'Hj Ida', nip: '-', code: 'HID', maxJpPerDay: 10 },
  { id: 't_yeni', name: 'Yeni', nip: '-', code: 'YEN', maxJpPerDay: 10 },
  { id: 't_deden', name: 'Deden', nip: '-', code: 'DDN', maxJpPerDay: 10 },
  { id: 't_mira', name: 'Mira', nip: '-', code: 'MR', maxJpPerDay: 10 },
  { id: 't_asep', name: 'Asep', nip: '-', code: 'ASP', maxJpPerDay: 10 },
  { id: 't_dita', name: 'Dita', nip: '-', code: 'DT', maxJpPerDay: 10 },
  { id: 't_aris', name: 'Aris', nip: '-', code: 'ARS', maxJpPerDay: 10 },
  { id: 't_dian', name: 'Dian', nip: '-', code: 'DN', maxJpPerDay: 10 },
  { id: 't_h_didi', name: 'H. Didi', nip: '-', code: 'HDD', maxJpPerDay: 10 },
  { id: 't_engkos', name: 'Engkos', nip: '-', code: 'EK', maxJpPerDay: 10 },
  { id: 't_jono', name: 'Jono', nip: '-', code: 'JN', maxJpPerDay: 10 },
  { id: 't_soni', name: 'Soni', nip: '-', code: 'SN', maxJpPerDay: 10 },
  { id: 't_tim_guru_wustha', name: 'Tim Guru Wustha', nip: '-', code: 'TGW', maxJpPerDay: 10 },
  { id: 't_wali_kelas', name: 'Wali Kelas (Homeroom)', nip: '-', code: 'WK', maxJpPerDay: 10 }
];

const classSuffixes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

// Generate all 33 Classrooms (VII A-VII K, VIII A-VIII K, IX A-IX K)
export const DEMO_CLASSROOMS: Classroom[] = [
  ...classSuffixes.map(s => ({ id: `c_7${s.toLowerCase()}`, name: `VII ${s}` })),
  ...classSuffixes.map(s => ({ id: `c_8${s.toLowerCase()}`, name: `VIII ${s}` })),
  ...classSuffixes.map(s => ({ id: `c_9${s.toLowerCase()}`, name: `IX ${s}` }))
];

export function getWaliKelasId(grade: string, suffix: string): string {
  const key = `${grade}${suffix.toUpperCase()}`;
  const mapping: Record<string, string> = {
    '7A': 't_mira',
    '7B': 't_hj_ika',
    '7C': 't_engkos',
    '7D': 't_jono',
    '7E': 't_elis_n',
    '7F': 't_hj_nina',
    '7G': 't_n_dede',
    '7H': 't_imas',
    '7I': 't_elis_m',
    '7J': 't_hj_ida',
    '7K': 't_ikeu',
    '8A': 't_yeni',
    '8B': 't_yuni',
    '8C': 't_asep',
    '8D': 't_feri',
    '8E': 't_dian',
    '8F': 't_nendah',
    '8G': 't_bahtiar',
    '8H': 't_deden',
    '8I': 't_noneng',
    '8J': 't_yani',
    '8K': 't_dita',
    '9A': 't_h_yadi',
    '9B': 't_lenie',
    '9C': 't_nida',
    '9D': 't_lisa',
    '9E': 't_hermawati',
    '9F': 't_eni',
    '9G': 't_yulia',
    '9H': 't_dewi',
    '9I': 't_dadang',
    '9J': 't_n_tenta',
    '9K': 't_rita',
  };
  return mapping[key] || 't_wali_kelas';
}

interface WorkloadRule {
  subject: string;
  jp: number;
  getTeacher: (grade: string, suffix: string) => string;
}

const workloadRules: WorkloadRule[] = [
  {
    subject: 'Bahasa Indonesia',
    jp: 6,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        if (['A', 'B', 'C', 'D', 'E', 'F'].includes(suffix)) return 't_elis_n';
        return 't_imas';
      } else if (grade === '8') {
        if (['A', 'B', 'C', 'D'].includes(suffix)) return 't_hana';
        if (['E', 'F', 'G', 'H', 'J', 'K'].includes(suffix)) return 't_nendah';
        return 't_noneng'; // I
      } else {
        if (['A', 'B', 'C', 'D', 'E', 'F'].includes(suffix)) return 't_h_yadi';
        return 't_noneng'; // G to K
      }
    }
  },
  {
    subject: 'Bahasa Inggris',
    jp: 4,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        if (['A', 'B'].includes(suffix)) return 't_hj_ika';
        if (['C', 'E', 'F'].includes(suffix)) return 't_hj_nina';
        return 't_elis_m'; // D, G to K
      } else if (grade === '8') {
        if (['A', 'B', 'C'].includes(suffix)) return 't_ayi';
        if (['D', 'E'].includes(suffix)) return 't_yulia';
        return 't_tati'; // F to K
      } else {
        if (['A', 'B', 'C', 'D'].includes(suffix)) return 't_hj_ika';
        if (['E', 'F', 'G', 'H'].includes(suffix)) return 't_yulia';
        return 't_dadang'; // I to K
      }
    }
  },
  {
    subject: 'Bahasa Sunda',
    jp: 2,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        if (['A', 'B', 'C', 'D', 'E'].includes(suffix)) return 't_lisa';
        if (suffix === 'F') return 't_dadang';
        return 't_hana'; // G to K
      } else if (grade === '8') {
        if (['A', 'B', 'C', 'F', 'J', 'K'].includes(suffix)) return 't_yulia';
        return 't_dadang'; // D, E, G, H, I
      } else {
        return 't_lisa'; // A to K
      }
    }
  },
  {
    subject: 'BK',
    jp: 1,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(suffix) ? 't_lina' : 't_rafli';
      } else if (grade === '8') {
        if (['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(suffix)) return 't_m_iqbal';
        if (['H', 'J'].includes(suffix)) return 't_hilda';
        return 't_rafli'; // I, K
      } else {
        return ['A', 'B', 'C', 'D'].includes(suffix) ? 't_hilda' : 't_sindi'; // E to K
      }
    }
  },
  {
    subject: 'Informatika',
    jp: 3,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        if (['A', 'D'].includes(suffix)) return 't_bahtiar';
        if (['B', 'E', 'F'].includes(suffix)) return 't_hilda';
        if (['C', 'G', 'I'].includes(suffix)) return 't_rafli';
        return 't_m_iqbal'; // H, J, K
      } else if (grade === '8') {
        if (['A', 'B'].includes(suffix)) return 't_nurul';
        if (['C', 'E'].includes(suffix)) return 't_bahtiar';
        if (['D', 'F'].includes(suffix)) return 't_yani';
        return 't_ayi'; // G to K
      } else {
        return 't_tata'; // A to K
      }
    }
  },
  {
    subject: 'IPA',
    jp: 5,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        if (['A', 'B', 'C', 'D', 'E'].includes(suffix)) return 't_n_tenta';
        return 't_ikeu'; // F to K
      } else if (grade === '8') {
        if (['A', 'B', 'C', 'D', 'I', 'J'].includes(suffix)) return 't_rita';
        return 't_nida'; // E, F, G, H, K
      } else {
        if (['A', 'B', 'E', 'F', 'G', 'I'].includes(suffix)) return 't_eni';
        if (['C', 'D'].includes(suffix)) return 't_nida';
        if (['H', 'J'].includes(suffix)) return 't_n_tenta';
        return 't_rita'; // K
      }
    }
  },
  {
    subject: 'IPS',
    jp: 4,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        if (['A', 'B', 'C'].includes(suffix)) return 't_hermawati';
        if (['D', 'E', 'F'].includes(suffix)) return 't_nurul';
        if (['G', 'H', 'I', 'J'].includes(suffix)) return 't_bahtiar';
        return 't_feri'; // K
      } else if (grade === '8') {
        if (['A', 'B', 'C', 'E', 'J'].includes(suffix)) return 't_yani';
        if (['D', 'F', 'H', 'I', 'K'].includes(suffix)) return 't_feri';
        return 't_bahtiar'; // G
      } else {
        if (['A', 'B', 'C'].includes(suffix)) return 't_h_usep';
        if (['D', 'E'].includes(suffix)) return 't_hermawati';
        return 't_dewi'; // F to K
      }
    }
  },
  {
    subject: 'Matematika',
    jp: 5,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        return ['A', 'B', 'C', 'D', 'E', 'F'].includes(suffix) ? 't_idik' : 't_n_dede';
      } else if (grade === '8') {
        if (['A', 'C', 'D', 'E', 'F'].includes(suffix)) return 't_ali';
        if (['B', 'G', 'H', 'I', 'J'].includes(suffix)) return 't_yuni';
        return 't_dadang'; // K
      } else {
        if (['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(suffix)) return 't_lenie';
        if (['H', 'K'].includes(suffix)) return 't_yuni';
        return 't_n_dede'; // I, J
      }
    }
  },
  {
    subject: 'Pendidikan Agama dan Budi Pekerti',
    jp: 3,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        return ['A', 'B', 'K'].includes(suffix) ? 't_komariah' : 't_hj_ida';
      } else if (grade === '8') {
        if (['A', 'B', 'C', 'D', 'K'].includes(suffix)) return 't_yeni';
        if (['E', 'F', 'G', 'I', 'J'].includes(suffix)) return 't_komariah';
        return 't_deden'; // H
      } else {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(suffix) ? 't_deden' : 't_yeni'; // I to K
      }
    }
  },
  {
    subject: 'Pendidikan Pancasila',
    jp: 3,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        return 't_mira'; // A to K
      } else if (grade === '8') {
        return suffix === 'K' ? 't_dita' : 't_asep';
      } else {
        return suffix === 'K' ? 't_asep' : 't_dita';
      }
    }
  },
  {
    subject: 'PJOK',
    jp: 3,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(suffix) ? 't_aris' : 't_dian';
      } else if (grade === '8') {
        return ['A', 'B', 'C'].includes(suffix) ? 't_dian' : 't_h_didi';
      } else {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(suffix) ? 't_engkos' : 't_dian'; // I to K
      }
    }
  },
  {
    subject: 'Seni Budaya',
    jp: 2,
    getTeacher: (grade, suffix) => {
      if (grade === '7') {
        return ['A', 'B', 'C', 'D', 'E'].includes(suffix) ? 't_jono' : 't_soni';
      } else if (grade === '8') {
        return 't_soni';
      } else {
        return 't_jono';
      }
    }
  },
  {
    subject: 'Wustho',
    jp: 1,
    getTeacher: (grade, suffix) => getWaliKelasId(grade, suffix)
  },
  {
    subject: 'Kewalikelasan',
    jp: 1,
    getTeacher: (grade, suffix) => getWaliKelasId(grade, suffix)
  }
];

// Generate all workloads programmatically for SMPN 1 Manonjaya based on rules
const generatedWorkloads: Workload[] = [];
let wlCounter = 1;

DEMO_CLASSROOMS.forEach(classroom => {
  let grade = '7';
  if (classroom.name.startsWith('VIII')) {
    grade = '8';
  } else if (classroom.name.startsWith('IX')) {
    grade = '9';
  } else if (classroom.name.startsWith('VII')) {
    grade = '7';
  } else {
    grade = classroom.name.substring(0, 1);
  }
  const suffix = classroom.name.substring(classroom.name.length - 1).toUpperCase();

  workloadRules.forEach(rule => {
    const teacherId = rule.getTeacher(grade, suffix);
    generatedWorkloads.push({
      id: `w_demo_${wlCounter++}`,
      teacherId,
      classroomId: classroom.id,
      subject: rule.subject,
      weeklyJp: rule.jp
    });
  });
});

export const DEMO_WORKLOADS = generatedWorkloads;
