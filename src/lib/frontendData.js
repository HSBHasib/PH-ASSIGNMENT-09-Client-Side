// Get all doctors data
export const getAllDoctorData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const data = await res.json() || [];
    return data;
}

// Get Top rated doctors data
export const getTopDoctorData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/topDoctors`);
    const data = await res.json() || [];
    return data;
}