export const handleEmailClick = (e, emailIcon, CONTACT_EMAIL) => {
  if (CONTACT_EMAIL && emailIcon && !emailIcon.current.href) {
    e.preventDefault()
    const email = decryptEmail(CONTACT_EMAIL)
    emailIcon.current.href = `mailto:${email}`
    emailIcon.current.click()
  }
}

export const encryptEmail = email => {
  return btoa(unescape(encodeURIComponent(email)))
}

const isBase64Encoded = value => {
  if (!value || typeof value !== 'string' || value.includes('@')) {
    return false
  }
  const normalized = value.trim()
  return (
    normalized.length % 4 === 0 &&
    /^[A-Za-z0-9+/]+={0,2}$/.test(normalized)
  )
}

export const decryptEmail = encryptedEmail => {
  if (!isBase64Encoded(encryptedEmail)) {
    return encryptedEmail
  }
  try {
    return decodeURIComponent(escape(atob(encryptedEmail)))
  } catch (error) {
    console.error('解密邮箱失败:', error)
    return encryptedEmail
  }
}
