import { BigInt } from "@graphprotocol/graph-ts"
import {
  CyberSpawnNFTMarketplace,
  NFTMarketplaceContractDeployed,
  OfferCancelled,
  OfferCreated,
  OfferPurchased,
  PauseToggled,
  UpdateAccessControls,
  UpdateDiscountRate,
  UpdateMarketplacePlatformFee,
  UpdateOfferSalePrice,
  UpdatePlatformFeeRecipient
} from "../generated/CyberSpawnNFTMarketplace/CyberSpawnNFTMarketplace"
import { ExampleEntity } from "../generated/schema"

export function handleNFTMarketplaceContractDeployed(
  event: NFTMarketplaceContractDeployed
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.CyberSpawnNFT(...)
  // - contract.LIVE_PERIOD(...)
  // - contract.MAX_BPS(...)
  // - contract.cnd(...)
  // - contract.counter(...)
  // - contract.css(...)
  // - contract.cssReserve(...)
  // - contract.currency(...)
  // - contract.cybercity(...)
  // - contract.discount(...)
  // - contract.getOffer(...)
  // - contract.isPaused(...)
  // - contract.offers(...)
  // - contract.path(...)
  // - contract.platformFee(...)
  // - contract.priceCss(...)
  // - contract.reservedGas(...)
  // - contract.uniswapRouter(...)
}

export function handleOfferCancelled(event: OfferCancelled): void {}

export function handleOfferCreated(event: OfferCreated): void {
  
}

export function handleOfferPurchased(event: OfferPurchased): void {}

export function handlePauseToggled(event: PauseToggled): void {}

export function handleUpdateAccessControls(event: UpdateAccessControls): void {}

export function handleUpdateDiscountRate(event: UpdateDiscountRate): void {}

export function handleUpdateMarketplacePlatformFee(
  event: UpdateMarketplacePlatformFee
): void {}

export function handleUpdateOfferSalePrice(event: UpdateOfferSalePrice): void {}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipient
): void {}
