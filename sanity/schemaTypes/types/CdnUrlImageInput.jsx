import React from 'react'

export default function CdnUrlImageInput(props) {
  const {value, elementProps} = props
  const url = typeof value === 'string' ? value.trim() : ''

  const showPreview = url && /^https?:\/\//i.test(url)

  return (
    <div style={{display: 'grid', gap: 12}}>
      <input {...elementProps} />

      {showPreview && (
        <div
          style={{
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8,
            padding: 10,
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          <div style={{fontSize: 12, opacity: 0.8, marginBottom: 8}}>Preview (from URL)</div>

          <img
            src={url}
            alt="CDN preview"
            style={{
              width: '100%',
              maxHeight: 260,
              objectFit: 'cover',
              borderRadius: 8,
              display: 'block',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}
    </div>
  )
}
