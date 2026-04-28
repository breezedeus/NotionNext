import { decryptEmail, encryptEmail } from '@/lib/plugins/mailEncrypt'

describe('mailEncrypt', () => {
  it('decrypts encrypted emails', () => {
    const email = 'test@example.com'
    const encrypted = encryptEmail(email)
    expect(decryptEmail(encrypted)).toBe(email)
  })

  it('returns plain emails unchanged', () => {
    const email = 'plain@example.com'
    expect(decryptEmail(email)).toBe(email)
  })

  it('returns non-base64 values unchanged', () => {
    const value = 'not-base64-$$'
    expect(decryptEmail(value)).toBe(value)
  })
})
