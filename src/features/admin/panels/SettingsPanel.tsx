import FormField from "@/components/ui/FormField"
import AdminHeader from "../components/AdminHeader"

export default function SettingsPanel() {
  return (
    <>
      <AdminHeader
        eyebrow="Preferências"
        title="Configurações"
        description="Atualize os dados públicos e as informações de contato da marca."
      />
      <div className="admin-card settings-card">
        <div className="admin-card-heading">
          <div>
            <p>Perfil público</p>
            <h2>Juliana Leslye</h2>
          </div>
          <button type="button" className="btn btn-dark">
            Salvar alterações
          </button>
        </div>
        <div className="form-grid mt-8">
          <FormField label="Nome profissional">
            <input defaultValue="Juliana Leslye" />
          </FormField>
          <FormField label="E-mail de contato">
            <input type="email" defaultValue="oi@lessbeauty.com.br" />
          </FormField>
          <FormField label="WhatsApp">
            <input defaultValue="(41) 99999-9999" />
          </FormField>
          <FormField label="Instagram">
            <input defaultValue="@lessbeautyeco" />
          </FormField>
          <FormField full label="Apresentação">
            <textarea
              rows={4}
              defaultValue="Educadora e profissional da beleza especializada no ensino presencial de cortes."
            />
          </FormField>
        </div>
      </div>
    </>
  )
}
