//Test Suite

describe('JavaScript2 Code Along', function () {
  describe('Problem 1 - first', function () {
    const arr = [1, 2, 3]
    it('Returns the first item of the array', () => {
      expect(first(arr)).toBe(1)
    })
  })
  describe('Problem 2 - length', function () {
    const arr = [1, 2, 3]
    it('Returns the length of the array', () => {
      expect(length(arr)).toBe(3)
    })
  })
  describe('Problem 3 - last', function () {
    const arr = [1, 2, 3]
    it('Returns the last item in the array', () => {
      expect(last(arr)).toBe(3)
    })
  })
  describe('Problem 4 - add item to array', function () {
    const arr = [1, 2, 3]
    it('Adds given item to given array', () => {
      expect(addItem(arr, 4)).toEqual([1, 2, 3, 4])
    })
  })
  describe('Problem 5 - remove last item from array', function () {
    it('Removes the last item from the given array', () => {
      const arr = [1, 2, 3]
      expect(removeLast(arr)).toEqual([1, 2])
    })
  })
  describe('Problem 6 - remove first item from array', function () {
    const arr = [1, 2, 3]
    it('removes correct item', () => {
      expect(removeFirst(arr)).toEqual([2, 3])
    })
  })
  describe('Problem 7 - push 1 - 25 to the given array', function () {
    const arr = [...Array(26).keys()]
    it('Correctly populates the array', () => {
      expect(maker()).toEqual(arr)
    })
  })
  describe('Problem 8 - 1 - 31 in array', function () {
    const arr = [...Array(32).keys()]
    it('Correctly populates array', function () {
      expect(count31()).toEqual(arr)
    })
  })
  describe('Problem 9 - reverse array', function () {
    const arr1 = [0, 1, 2, 3]
    const arr2 = [true, false]
    const arr3 = ['first', 'last']

    it('Correctly reverses first array', () => {
      expect(backWards(arr1)).toEqual(arr1.reverse())
    })
    it('Correctly reverses second array', () => {
      expect(backWards(arr2)).toEqual(arr2.reverse())
    })
    it('Correctly reverses third array', () => {
      expect(backWards(arr3)).toEqual(arr3.reverse())
    })
  })

  describe('Problem 10 - findInArray', function () {
    const arr = [1, 2, 3, 4]

    it('Correctly finds item', () => {
      expect(findInArray(arr, 4)).toBe(true)
    })
    it('Correctly says item could not be found', () => {
      expect(findInArray(arr, 5)).toBe(false)
    })
  })
  describe('Problem 11 - add 10', function () {
    const arr = [10, 20, 30]
    it('should add 10 to each item', function () {
      expect(addTen(arr)).toEqual([20, 30, 40])
    })
  })
  describe('Problem 12 - dot notation', function () {
    it('returns the correct property', () => {
      expect(personName()).toBe('sally')
    })
  })
  describe('Problem 13 - bracket notation', function () {
    it('Returns the correct property', () => {
      expect(personLocation()).toBe('Orem, UT')
    })
  })
  describe('Problem 14 - add new property to object using dot notation', function () {
    it('has the correct property', () => {
      expect(backpack.frontPocket).toBe('compass')
    })
  })
  describe('Problem 15 - add new property to object using bracket notation', function () {
    it('has the correct property', function () {
      expect(box.material).toBe('cardboard')
    })
  })
  describe('Problem 16 - assign property to variable', function () {
    it('userFirstName variable exists', function () {
      expect(userFirstName).toBeDefined()
    })
    it('userFirstName variable has correct value', function () {
      expect(userFirstName).toBe('sally')
    })
  })
  describe('Problem 17 - update user', function () {
    const someUser = {
      name: 'Sally Rally',
      pwHash: 'U+Ldlngx2BYQk',
      username: 'SallyRally801',
    }
    updateUser(someUser)
    it('correctly modifies name property', function () {
      expect(someUser.name).toBe('Ryan')
    })
    it('correctly modifies pwHash property', function () {
      expect(someUser.pwHash).toBe('superSafe')
    })
    it('correctly modifies username property', function () {
      expect(someUser.username).toBe('ryan2020')
    })
  })
  describe('Problem 18 - update email property', function () {
    const person = { email: 'oldValue' }
    updateEmail(person, 'newValue')
    it('correctly updates email property', function () {
      expect(person.email).toBe('newValue')
    })
  })
  describe('Problem 19 - is old enough', function () {
    it('isOldEnough should exist', function () {
      expect(isOldEnough).toBeDefined()
      expect(typeof isOldEnough).toBe('function')
    })
    it('Returns correct answer', function () {
      let result = isOldEnough({ age: 16 })
      expect(result).toBe(false)
    })
    it('Returns correct answer', function () {
      let result = isOldEnough({ age: 26 })
      expect(result).toBe(true)
    })
  })
  describe('Problem 20 - addRole', function () {
    const obj = { name: 'Andrew' }
    it('createName should exist', function () {
      expect(addRole).toBeDefined()
      expect(typeof addRole).toBe('function')
    })
    it('should add property to object', function () {
      addRole(obj, 'admin')
      expect(obj.role).toBe('admin')
    })
  })
  describe('Problem 21 - schoolStatus', function () {
    it('Should return correct value', () => {
      expect(schoolStatus('Good')).toBe('Wow, great job kiddo!')
    })
    it('Should return correct value', () => {
      expect(schoolStatus('Bad')).toBe('No more video games!')
    })
  })
  describe('Problem 22 - messageBasedOnAge', function () {
    it('Should return correct value', () => {
      expect(messageBasedOnAge(15)).toBe('Not quite old enough, sorry.')
    })
    it('Should return correct value', () => {
      expect(messageBasedOnAge(18)).toBe('Congrats on being an adult!')
    })
    it('Should return correct value', () => {
      expect(messageBasedOnAge(25)).toBe(
        'Somebody is really getting up there, huh?'
      )
    })
  })
  describe('Problem 23 - callbacks 1', function () {
    it('outerFn should exist', function () {
      expect(outerFn).toBeDefined()
      expect(typeof outerFn).toBe('function')
    })

    it('Correctly invokes inner function', () => {
      expect(outerFn(innerFn)).toBe('The innerFn is a callback!')
    })
  })
  describe('Problem 24 - callbacks 2', function () {
    it('fullName should exist', function () {
      expect(fullName).toBeDefined()
      expect(typeof fullName).toBe('function')
    })

    it('Correctly executes callback', () => {
      expect(fullName('First', 'Last', welcomeMessage)).toBe(
        'Welcome to DevMountain, First Last!'
      )
    })
  })
  describe('Problem 25 - canDrink', function () {
    it(`canDrink should exist`, function () {
      expect(canDrink).toBeDefined()
      expect(typeof canDrink).toBe('function')
    })
    it('returns correct value', () => {
      expect(canDrink(12, drinkSoda, drinkAlcohol)).toBe(
        'Come back when you are legally allowed a drink!'
      )
    })
    it('returns correct value', () => {
      expect(canDrink(22, drinkSoda, drinkAlcohol)).toBe('Drink responsibly!')
    })
  })
  describe('Problem 26 - calculator', function () {
    it(`add should exist`, function () {
      expect(add).toBeDefined()
      expect(typeof add).toBe('function')
    })
    it(`multiply should exist`, function () {
      expect(multiply).toBeDefined()
      expect(typeof multiply).toBe('function')
    })
    it(`math should exist`, function () {
      expect(math).toBeDefined()
      expect(typeof math).toBe('function')
    })
    it('returns correct value', () => {
      expect(math(2, 5, add)).toBe(7)
    })
    it('returns correct value', () => {
      expect(math(2, 5, multiply)).toBe(10)
    })
  })
})
