import React from "react"
import WindowControls from "../components/WindowControls"
import WindowWrapper from "../hoc/WindowWrapper"
import useWindowStore from "../store/window"

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) {
    return null
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="bg-white p-6">
        {data.image && (
          <div className="mb-4">
            <img 
              src={data.image} 
              alt={data.name} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        {data.subtitle && (
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {data.subtitle}
          </h3>
        )}
        {data.description && Array.isArray(data.description) && (
          <div className="space-y-4">
            {data.description.map((paragraph, index) => (
              <p key={index} className="text-sm text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const TestWindow = WindowWrapper(Text, "txtfile")

export default TestWindow
