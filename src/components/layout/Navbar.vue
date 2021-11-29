<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand router-link to="/">CookingRecipe</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item-dropdown text="레시피" right>
						<b-dropdown-item router-link to="/닭갈비">닭갈비</b-dropdown-item>
						<b-dropdown-item href="#">짜장면</b-dropdown-item>
						<b-dropdown-item href="#">밀크쉐이크</b-dropdown-item>
						<b-dropdown-item href="#">고추장 삼겹살</b-dropdown-item>
						<b-dropdown-item href="#">떡볶이</b-dropdown-item>
						<b-dropdown-item href="#">부대찌개</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form>

					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
						<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>
