import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export const getBase64 = (file: any) => {
  if (!file) return ''
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const formatMoney = (number: any) => Number(Number(number)?.toFixed(1)).toLocaleString()

export const renderStartFromNumber = (number: number, size: number) => {
  const stars = []
  for (let i = 0; i < +number; i++) {
    stars.push(<AiFillStar color='orange' size={size} />)
  }
  for (let i = 5; i > +number; i--) {
    stars.push(<AiOutlineStar color='orange' size={size} />)
  }
  return stars
}

export const readFileData = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      resolve(e.target?.result)
    }
    reader.onerror = (err) => {
      reject(err)
    }
    reader.readAsDataURL(file)
  })
}

export const handleSplitName = (fullName: string) => {
  const firstName: string = fullName.substring(0, fullName.lastIndexOf(' '))
  const lastName: string = fullName.substring(fullName.lastIndexOf(' ') + 1, fullName.length)

  return { firstName, lastName }
}
