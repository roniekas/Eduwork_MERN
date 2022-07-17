import React from "react";

class FormElement extends React.Component {
    state={
        nama: '',
        jurusan: '',
        jenisKelamin: '',
        alamat: '',
        member: false
    }
    handleOngChange = (e) => {
        if(e.target.name === "nama") {
            this.setState({nama: e.target.value})
        } else if (e.target.name === "jurusan") {
            this.setState({jurusan: e.target.value})
        } else if (e.target.name === "jenisKelamin") {
            this.setState({jenisKelamin: e.target.value})
        } else if (e.target.name === "alamat") {
            this.setState({alamat: e.target.value})
        } else if (e.target.name === "member") {
            this.setState({member: e.target.checked})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            Nama : ${this.state.nama}
            Jurusan : ${this.state.jurusan}
            Jenis Kelamin : ${this.state.jenisKelamin}
            Alamat : ${this.state.alamat}
            Member : ${this.state.member ? 'Ya, Jadi MEMBER' : 'Tidak Jadi MEMBER'}
        `);
        this.setState({
            nama: '',
            jurusan: '',
            jenisKelamin: '',
            alamat: '',
            member: false
        });
    }
    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="nama">Nama : 
                <input type="text" name="nama" onChange={this.handleOngChange} dafaultValue={this.state.nama}/>
                </label> <br /> <br />
                <label htmlFor="jurusan">
                    Jurusan : 
                    <select name="jurusan" id="jurusan" onChange={this.handleOngChange} dafaultValue={this.state.jurusan}>
                        <option value="">Pilih Jurusan</option>
                        <option value="Tehnik Informatika">Tehnik Informatika</option>
                        <option value="Ilmu Komunikasi">Ilmu Komunikasi</option>
                        <option value="Akuntansi">Akuntansi</option>
                    </select>
                </label> <br /> <br />
                <label htmlFor="jenisKelamin">
                    Jenis Kelamin : <br />
                    <input type="radio" value="laki-laki" name="jenisKelamin" onChange={this.handleOngChange} dafaultValue={this.state.jenisKelamin}/> Laki - Laki <br />
                    <input type="radio" value="perempuan" name="jenisKelamin" onChange={this.handleOngChange} dafaultValue={this.state.jenisKelamin}/> Peremuan <br />
                </label> <br /> <br />
                <label htmlFor="alamat">
                    Alamat : 
                    <textarea name="alamat" id="alamat" cols="30" rows="5" onChange={this.handleOngChange} dafaultValue={this.state.alamat}/>
                </label> <br /> <br />
                <label htmlFor="member">
                    Member : <br />
                    <input type="checkbox" value={true} name="member" onChange={this.handleOngChange} defaultChecked="false"/> Jadi Member ?
                </label> <br /><br />

                <button type="submit">Kirim!</button>
            </form>
        )
    }
}

export default FormElement;