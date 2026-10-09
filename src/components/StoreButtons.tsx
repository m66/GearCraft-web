import { site } from '../site.ts'

const stores = [
  { name: 'Google Play', action: 'Get it on', url: site.googlePlayUrl },
  { name: 'App Store', action: 'Download on the', url: site.appStoreUrl },
]

export function StoreButtons() {
  return (
    <div className="store-buttons">
      {stores.map((store) =>
        store.url ? (
          <a key={store.name} className="store-button" href={store.url}>
            <small>{store.action}</small>
            <strong>{store.name}</strong>
          </a>
        ) : (
          <span key={store.name} className="store-button is-soon">
            <small>Coming soon to</small>
            <strong>{store.name}</strong>
          </span>
        ),
      )}
    </div>
  )
}
