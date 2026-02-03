 const Loading = () => {
  return (
    <div style={styles.wrapper} className="div">
      {[1, 2, 3].map((i) => (
        <div key={i} style={styles.skeletonCard}>
          <div style={styles.lineLarge}></div>
          <div style={styles.lineSmall}></div>
        </div>
      ))}
    </div>
  );
}
export default Loading;

const styles = {
  wrapper: {
    padding: "40px",
    backgroundColor: "#f9fafb",
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeletonCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  lineLarge: {
    height: "14px",
    width: "70%",
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  lineSmall: {
    height: "12px",
    width: "40%",
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
  },
  
};
