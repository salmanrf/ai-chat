export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="profile" style={{ minHeight: "100vh" }}>
      <h1>AI Chat</h1>
      {children}
    </div>
  );
}
