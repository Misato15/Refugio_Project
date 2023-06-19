// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Keepers" titleTo="keepers" buttonLabel="New Keeper" buttonTo="newKeeper">
        <Route path="/keepers/new" page={KeeperNewKeeperPage} name="newKeeper" />
        <Route path="/keepers/{id}/edit" page={KeeperEditKeeperPage} name="editKeeper" />
        <Route path="/keepers/{id}" page={KeeperKeeperPage} name="keeper" />
        <Route path="/keepers" page={KeeperKeepersPage} name="keepers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Genders" titleTo="genders" buttonLabel="New Gender" buttonTo="newGender">
        <Route path="/genders/new" page={GenderNewGenderPage} name="newGender" />
        <Route path="/genders/{id}/edit" page={GenderEditGenderPage} name="editGender" />
        <Route path="/genders/{id}" page={GenderGenderPage} name="gender" />
        <Route path="/genders" page={GenderGendersPage} name="genders" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Animals" titleTo="animals" buttonLabel="New Animal" buttonTo="newAnimal">
        <Route path="/animals/new" page={AnimalNewAnimalPage} name="newAnimal" />
        <Route path="/animals/{id}/edit" page={AnimalEditAnimalPage} name="editAnimal" />
        <Route path="/animals/{id}" page={AnimalAnimalPage} name="animal" />
        <Route path="/animals" page={AnimalAnimalsPage} name="animals" />
      </Set>
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />


    <Private unauthenticated='login'>

      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />

    </Private>

    
    </Router>
  )
}

export default Routes
