import { validateEmail, validateName } from '../../App/Services/Validation'

test('Validate valid emails', () => {
  const validEmails = [
    'foo@baz.com',
    'foo.bar@baz.com',
    'foo@bar.baz.com',
    'foo+bar@baz.com',
    '"foo"@baz.com',
    '123456789@baz.com',
    'foo@baz-quz.com',
    '_@baz.com',
    '________@baz.com',
    'foo@baz.name',
    'foo@baz.co.uk',
    'foo-bar@baz.com',
    'foo."barqux"@baz.com',
    'foo.bar."bux".bar.com@baz.com',
    'baz.com@baz.com',
    'foo.bar+qux@baz.com',
    'foo.bar-qux@baz.com',
    'foo.bar@baz.com.',
    'f@baz.com',
    '_foo@baz.com',
    'foo/bar=qux@baz.com',
    'foo."bar"@baz.com',
    'foo@bar--baz.com',
    'foob*ar@baz.com'
  ]
  validEmails.forEach((email) => {
    expect(validateEmail(email)).toBe(true)
  })
})

test('Validate invalid emails', () => {
  const invalidEmails = [
    'foo',
    '#@%^%#$@#$@#.com',
    '@baz.com',
    'Jane Doe <foo@baz.com>',
    'qux.baz.com',
    'foo@bar@baz.com',
    'foo@baz',
    'foo@123.456.789.12345',
    'foo@baz..com',
    'foo bar@baz.com',
    'foo@baz,qux.com',
    'foo.bar',
    '@',
    '@@',
    '.@'
  ]
  invalidEmails.forEach((email) => {
    expect(validateEmail(email)).toBe(false)
  })
})

test('Validate valid names', () => {
  const validNames = [
    'test',
    'test_user',
    'test-user',
    'test_user123',
    'test_user_123',
    'test-user123',
    'test-user-123',
    '123test',
    'l33t',
    't3st1ng',
    'test ',
    'test user',
    ' test_user_123'
  ]
  validNames.forEach((name) => {
    expect(validateName(name)).toBe(true)
  })
})

test('Validate invalid names', () => {
  const invalidNames = [
    'test-user!',
    'test|user123',
    'test-user123?',
    'test-user(123)',
    '123test@',
    'l33t@example.com',
    't*st*ng'
  ]
  invalidNames.forEach((name) => {
    expect(validateName(name)).toBe(false)
  })
})
