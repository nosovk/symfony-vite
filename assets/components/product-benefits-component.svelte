<svelte:options tag="product-benefits-component" />

<script>
	import productInside from "../images/ProductBenefits/humastar-300sr-inside.jpg";
	import productOutside from "../images/ProductBenefits/humastar-300sr-outside.png";

	import CheckCircle from "../images/icons/CheckCircle.svelte";
</script>

<section class="section">
	<div class="container">
		<div class="content">
			<h2 class="heading">Product Benefits right</h2>
			<p>
				The HumaStar 300SR is the latest member of HUMAN's clinical chemistry systems. Based on the
				proven hardware and software quality of HumaStar 100/200 it uses the time-tested system
				reagent kits of HumaStar 600 with perfectly matching methods, calibrators and controls.
			</p>
		</div>

		<img src={productInside} class="image" alt="HumaStar 300SR inside" />
	</div>

	<div class="container">
		<img src={productOutside} class="image" alt="HumaStar 300SR outside" />

		<div class="content">
			<h2 class="heading">Product Benefits right</h2>
			<p>
				The HumaStar 300SR is the latest member of HUMAN's clinical chemistry systems. Based on the
				proven hardware and software quality of HumaStar 100/200 it uses the time-tested system
				reagent kits of HumaStar 600 with perfectly matching methods, calibrators and controls. The
				HumaStar 300SR is the latest member of HUMAN's clinical chemistry systems. Based on the
				proven hardware and software quality of HumaStar 100/200 it uses the time-tested system
				reagent kits of HumaStar 600 with perfectly matching methods, calibrators and controls.
			</p>

			<div class="check-items">
				<div class="check-item">
					<div class="badge-primary badge-color icon-28">
						<CheckCircle class="icon-28" />
					</div>
					<p>Keep your customers in the loop with live chat</p>
				</div>

				<div class="check-item">
					<div class="badge-primary badge-color">
						<CheckCircle class="icon-28" />
					</div>
					<p>Embed help articles right on your website</p>
				</div>

				<div class="check-item">
					<div class="badge-primary badge-color">
						<CheckCircle class="icon-28" />
					</div>
					<p>Customers never have to leave the page to find an answer</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.section {
		display: grid;
		padding: 96px 0px;
		gap: 96px;
		background-color: $gray-50;

		.container:last-child > img {
			order: 1;

			@media screen and (min-width: $min-width-tablet) {
				order: 0;
			}
		}

		.container {
			display: grid;
			grid-template-columns: 1fr;
			gap: 20px;
			align-items: center;

			@media screen and (min-width: $min-width-tablet) {
				grid-template-columns: 1fr 1fr;
				gap: 0;
			}

			.image {
				width: 100%;
			}

			.content {
				padding: 0px 64px;

				@media screen and (min-width: $min-width-tablet) {
					padding: 0px 40px;
				}

				@media (min-width: $min-width-wide-screen) {
					padding: 0px 112px;
				}

				.heading {
					margin-bottom: 16px;
					color: $gray-900;
					@extend %display-md;
					font-weight: $font-w-semibold;
				}

				p {
					color: $gray-600;
					@extend %text-lg;
					font-weight: $font-w-regular;
				}

				.check-items {
					display: flex;
					flex-direction: column;
					padding-left: 16px;
					margin-top: 32px;
					gap: 20px;

					.check-item {
						display: flex;
						gap: 12px;

						.badge-color {
							background-color: transparent;
						}

						.icon-28 {
							height: 28px;
							width: 28px;
						}
					}
				}
			}
		}
	}
</style>
