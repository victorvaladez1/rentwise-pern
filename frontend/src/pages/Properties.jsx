import PropertiesList from "../components/PropertiesList";

export default function Properties() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-medium">Properties</h2>
      <p className="mt-1 text-gray-600">All properties</p>
      <PropertiesList />
    </div>
  );
}
