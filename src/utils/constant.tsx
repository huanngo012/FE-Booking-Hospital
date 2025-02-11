import { RiLockPasswordLine } from 'react-icons/ri'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
import { images } from '~/assets'
import TabProfile from '~/pages/user/TabProfile'
const { UserRecord } = images

export const encryptPasswordKey = '73XKXeYyitybbeEmufSzBOD5OZMDcFCo'
export const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}
export const pageSizeDefault = 10
export const paths = {
  HOME: '/',
  LOGIN: '/login',
  USER: '/user',
  HOSPITALS: '/hospitals',
  HOSPITAL_DETAIL: '/hospitals/:id',
  SPECIALTIES: '/specialties',
  DOCTORS: '/doctors',
  NEWS: '/news',
  ABOUT: '/about',
  NOT_FOUND: '*'
}

export const paddingScreen = {
  padding: {
    oversize: '0 160px',
    desktop: '0 64px',
    mobile: '10px 32px'
  }
}

export const voteOptions = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
]

export const roleName = [
  {
    _id: 1,
    name: 'Admin'
  },
  {
    _id: 2,
    name: 'Host'
  },
  {
    _id: 3,
    name: 'Bác sĩ'
  },
  {
    _id: 4,
    name: 'Bệnh nhân'
  }
]
export const genders = [
  {
    _id: 'MALE',
    name: 'user.male'
  },
  {
    _id: 'FEMALE',
    name: 'user.female'
  }
]

export const status = [
  {
    _id: 'Đã hủy',
    name: 'Đã hủy'
  },
  {
    _id: 'Đang xử lý',
    name: 'Đang xử lý'
  },
  {
    _id: 'Đã xác nhận',
    name: 'Đã xác nhận'
  },
  {
    _id: 'Đã khám',
    name: 'Đã khám'
  },
  {
    _id: 'Bỏ khám',
    name: 'Bỏ khám'
  }
]

export const statusUser = [
  {
    _id: false,
    name: 'user.active'
  },
  {
    _id: true,
    name: 'user.block'
  }
]
export const statusPay = [
  {
    _id: false,
    name: 'booking.unpaid'
  },
  {
    _id: true,
    name: 'booking.paid'
  }
]

export const times = [
  {
    id: 1,
    value: '07:00 - 08:00',
    maxNumber: ''
  },
  {
    id: 2,
    value: '08:00 - 09:00',
    maxNumber: ''
  },
  {
    id: 3,
    value: '09:00 - 10:00',
    maxNumber: ''
  },
  {
    id: 4,
    value: '10:00 - 11:00',
    maxNumber: ''
  },
  {
    id: 5,
    value: '11:00 - 12:00',
    maxNumber: ''
  },
  {
    id: 6,
    value: '13:00 - 14:00',
    maxNumber: ''
  },
  {
    id: 7,
    value: '14:00 - 15:00',
    maxNumber: ''
  },
  {
    id: 8,
    value: '15:00 - 16:00',
    maxNumber: ''
  },
  {
    id: 9,
    value: '16:00 - 17:00',
    maxNumber: ''
  },
  {
    id: 10,
    value: '17:00 - 18:00',
    maxNumber: ''
  },
  {
    id: 11,
    value: '18:00 - 19:00',
    maxNumber: ''
  },
  {
    id: 12,
    value: '19:00 - 20:00',
    maxNumber: ''
  },
  {
    id: 13,
    value: '20:00 - 21:00',
    maxNumber: ''
  }
]

export const provincesConstant = [
  {
    province_id: '92',
    province_name: 'Th\u00e0nh ph\u1ed1 C\u1ea7n Th\u01a1',
    province_type: 'Th\u00e0nh ph\u1ed1 Trung \u01b0\u01a1ng'
  },
  {
    province_id: '48',
    province_name: 'Th\u00e0nh ph\u1ed1 \u0110\u00e0 N\u1eb5ng',
    province_type: 'Th\u00e0nh ph\u1ed1 Trung \u01b0\u01a1ng'
  },
  {
    province_id: '01',
    province_name: 'Th\u00e0nh ph\u1ed1 H\u00e0 N\u1ed9i',
    province_type: 'Th\u00e0nh ph\u1ed1 Trung \u01b0\u01a1ng'
  },
  {
    province_id: '31',
    province_name: 'Th\u00e0nh ph\u1ed1 H\u1ea3i Ph\u00f2ng',
    province_type: 'Th\u00e0nh ph\u1ed1 Trung \u01b0\u01a1ng'
  },
  {
    province_id: '79',
    province_name: 'Th\u00e0nh ph\u1ed1 H\u1ed3 Ch\u00ed Minh',
    province_type: 'Th\u00e0nh ph\u1ed1 Trung \u01b0\u01a1ng'
  },
  {
    province_id: '89',
    province_name: 'T\u1ec9nh An Giang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '77',
    province_name: 'T\u1ec9nh B\u00e0 R\u1ecba - V\u0169ng T\u00e0u',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '95',
    province_name: 'T\u1ec9nh B\u1ea1c Li\u00eau',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '24',
    province_name: 'T\u1ec9nh B\u1eafc Giang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '06',
    province_name: 'T\u1ec9nh B\u1eafc K\u1ea1n',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '27',
    province_name: 'T\u1ec9nh B\u1eafc Ninh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '83',
    province_name: 'T\u1ec9nh B\u1ebfn Tre',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '74',
    province_name: 'T\u1ec9nh B\u00ecnh D\u01b0\u01a1ng',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '52',
    province_name: 'T\u1ec9nh B\u00ecnh \u0110\u1ecbnh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '70',
    province_name: 'T\u1ec9nh B\u00ecnh Ph\u01b0\u1edbc',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '60',
    province_name: 'T\u1ec9nh B\u00ecnh Thu\u1eadn',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '96',
    province_name: 'T\u1ec9nh C\u00e0 Mau',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '04',
    province_name: 'T\u1ec9nh Cao B\u1eb1ng',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '66',
    province_name: 'T\u1ec9nh \u0110\u1eafk L\u1eafk',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '67',
    province_name: 'T\u1ec9nh \u0110\u1eafk N\u00f4ng',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '11',
    province_name: 'T\u1ec9nh \u0110i\u1ec7n Bi\u00ean',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '75',
    province_name: 'T\u1ec9nh \u0110\u1ed3ng Nai',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '87',
    province_name: 'T\u1ec9nh \u0110\u1ed3ng Th\u00e1p',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '64',
    province_name: 'T\u1ec9nh Gia Lai',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '02',
    province_name: 'T\u1ec9nh H\u00e0 Giang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '35',
    province_name: 'T\u1ec9nh H\u00e0 Nam',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '42',
    province_name: 'T\u1ec9nh H\u00e0 T\u0129nh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '30',
    province_name: 'T\u1ec9nh H\u1ea3i D\u01b0\u01a1ng',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '93',
    province_name: 'T\u1ec9nh H\u1eadu Giang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '17',
    province_name: 'T\u1ec9nh Ho\u00e0 B\u00ecnh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '33',
    province_name: 'T\u1ec9nh H\u01b0ng Y\u00ean',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '56',
    province_name: 'T\u1ec9nh Kh\u00e1nh H\u00f2a',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '91',
    province_name: 'T\u1ec9nh Ki\u00ean Giang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '62',
    province_name: 'T\u1ec9nh Kon Tum',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '12',
    province_name: 'T\u1ec9nh Lai Ch\u00e2u',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '20',
    province_name: 'T\u1ec9nh L\u1ea1ng S\u01a1n',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '10',
    province_name: 'T\u1ec9nh L\u00e0o Cai',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '68',
    province_name: 'T\u1ec9nh L\u00e2m \u0110\u1ed3ng',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '80',
    province_name: 'T\u1ec9nh Long An',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '36',
    province_name: 'T\u1ec9nh Nam \u0110\u1ecbnh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '40',
    province_name: 'T\u1ec9nh Ngh\u1ec7 An',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '37',
    province_name: 'T\u1ec9nh Ninh B\u00ecnh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '58',
    province_name: 'T\u1ec9nh Ninh Thu\u1eadn',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '25',
    province_name: 'T\u1ec9nh Ph\u00fa Th\u1ecd',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '54',
    province_name: 'T\u1ec9nh Ph\u00fa Y\u00ean',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '44',
    province_name: 'T\u1ec9nh Qu\u1ea3ng B\u00ecnh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '49',
    province_name: 'T\u1ec9nh Qu\u1ea3ng Nam',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '51',
    province_name: 'T\u1ec9nh Qu\u1ea3ng Ng\u00e3i',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '22',
    province_name: 'T\u1ec9nh Qu\u1ea3ng Ninh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '45',
    province_name: 'T\u1ec9nh Qu\u1ea3ng Tr\u1ecb',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '94',
    province_name: 'T\u1ec9nh S\u00f3c Tr\u0103ng',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '14',
    province_name: 'T\u1ec9nh S\u01a1n La',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '72',
    province_name: 'T\u1ec9nh T\u00e2y Ninh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '34',
    province_name: 'T\u1ec9nh Th\u00e1i B\u00ecnh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '19',
    province_name: 'T\u1ec9nh Th\u00e1i Nguy\u00ean',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '38',
    province_name: 'T\u1ec9nh Thanh H\u00f3a',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '46',
    province_name: 'T\u1ec9nh Th\u1eeba Thi\u00ean Hu\u1ebf',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '82',
    province_name: 'T\u1ec9nh Ti\u1ec1n Giang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '84',
    province_name: 'T\u1ec9nh Tr\u00e0 Vinh',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '08',
    province_name: 'T\u1ec9nh Tuy\u00ean Quang',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '86',
    province_name: 'T\u1ec9nh V\u0129nh Long',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '26',
    province_name: 'T\u1ec9nh V\u0129nh Ph\u00fac',
    province_type: 'T\u1ec9nh'
  },
  {
    province_id: '15',
    province_name: 'T\u1ec9nh Y\u00ean B\u00e1i',
    province_type: 'T\u1ec9nh'
  }
]

export const instractions = [
  {
    _id: 'before',
    name: 'Trước khi ăn'
  },
  {
    _id: 'after',
    name: 'Sau khi ăn'
  }
]
export const dosages = [
  {
    _id: 'm',
    name: 'Sáng'
  },
  {
    _id: 'a',
    name: 'Chiều'
  },
  {
    _id: 'e',
    name: 'Tối'
  }
]

export const tabsUser = [
  {
    icon: <FaUserCircle size={24} />,
    text: 'Thông tin cá nhân',
    component: <TabProfile />,
    path: `profile`
  },
  {
    icon: <RiLockPasswordLine size={24} />,
    text: 'Đổi mật khẩu',
    // component: <TabPassword />,
    path: `password`
  },
  {
    icon: <UserRecord width='24px' height='24px' />,
    text: 'Hồ sơ bệnh nhân',
    // component: <TabRecord />,
    path: `record`
  },
  {
    icon: <IoMdCalendar size={24} />,
    text: 'Lịch khám',
    // component: <TabBooking />,
    path: `booking`
  }
]
