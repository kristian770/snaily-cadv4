export const enum ModalIds {
  ReauthorizeSession = "ReauthorizeSessionModal",
  Changelog = "ChangelogModal",

  RegisterVehicle = "RegisterVehicleModal",
  RegisterWeapon = "RegisterWeaponModal",
  ManageLicenses = "ManageLicensesModal",
  ManageMedicalRecords = "ManageMedicalRecords",
  ManageBleetModal = "ManageBleetModal",
  ManageOccupation = "ManageOccupationModal",
  CitizenImage = "CitizenImageModal",
  TransferVehicle = "TransferVehicleModal",
  CreatePet = "CreatePetModal",
  ManagePetMedicalRecord = "ManagePetMedicalRecordModal",
  Followers = "FollowersModal",
  Following = "FollowingModal",
  ManageBleeterProfile = "ManageBleeterProfileModal",

  GiveTempPassword = "GiveTempPasswordModal",
  ManagePermissions = "ManagePermissionsModal",
  ImportValues = "ImportValuesModal",
  ManagePenalCodeGroup = "AddPenalCodeGroupModal",
  ManageValue = "ManageValueModal",
  ImportCitizens = "ImportCitizensModal",
  ImportVehicles = "ImportVehiclesModal",
  ImportWeapons = "ImportWeaponsModal",
  ManageCustomField = "ManageCustomFieldModal",
  ManageUnitQualifications = "ManageUnitQualificationsModal",
  ManageUnitCallsign = "ManageUnitCallsignModal",
  ManageCustomRole = "ManageCustomRoleModal",
  ManageRoles = "ManageRolesModal",
  PruneUsers = "PruneUsersModal",
  ViewAuditLogData = "ViewAuditLogDataModal",
  PruneUnits = "PruneUnitsModal",

  ManageTowCall = "ManageTowCallModal",
  AssignToTowCall = "AssignToTowCallModal",
  CropImageModal = "CropImageModal",

  Manage2FA = "Manage2FAModal",

  ManageTaxiCall = "ManageTaxiCallModal",

  CreateBusiness = "CreateBusinessModal",
  JoinBusiness = "JoinBusinessModal",
  ManageBusinessPost = "ManageBusinessPostModal",
  CreateBusinessPost = "CreateBusinessPostModal",
  ManageEmployee = "ManageEmployeeModal",
  AlertDeleteBusiness = "AlertDeleteBusinessModal",
  ManageBusinessRole = "ManageBusinessRoleModal",

  ManageOfficer = "ManageOfficerModal",
  SelectOfficer = "SelectOfficerModal",
  ManageBolo = "ManageBoloModal",
  Manage911Call = "Manage911CallModal",
  MergeUnit = "MergeUnitModal",
  SelectMapServer = "SelectMapServerModal",

  ManageVehicleFlags = "ManageVehicleFlagsModal",
  ManageCitizenFlags = "ManageCitizenFlagsModal",
  ManageAddressFlags = "ManageAddressFlagsModal",
  ManageVehicleLicenses = "ManageVehicleLicensesModal",
  AddressSearch = "AddressSearchModal",
  SelectDepartment = "SelectDepartmentModal",
  ManageLicensePoints = "ManageLicensePointsModal",

  NameSearch = "NameSearchModal",
  VehicleSearchWithinName = "VehicleSearchWithinNameModal",
  WeaponSearchWithinName = "WeaponSearchWithinNameModal",
  CreateCitizen = "CreateCitizenModal",

  SwitchDivisionCallsign = "SwitchDivisionCallsignModal",
  VehicleSearch = "VehicleSearchModal",
  WeaponSearch = "WeaponSearchModal",
  CreateWrittenWarning = "CreateWrittenWarningModal",
  ManageRecord = "ManageRecordModal",
  CreateTicket = "CreateTicketModal",
  CreateArrestReport = "CreateArrestReportModal",
  Notepad = "NotepadModal",
  ManageUnit = "ManageUnitModal",
  CreateWarrant = "CreateWarrantModal",
  ManageIncident = "ManageIncidentModal",
  LinkCallToIncident = "LinkCallToIncidentModal",
  ManageSeizedItems = "ManageSeizedItemsModal",
  ManageExam = "ManageExamModal",
  ManageCitizenCustomFields = "ManageCitizenCustomFieldsModal",
  CustomFieldSearch = "CustomFieldSearchModal",
  AddAssignedUnit = "AddAssignedUnitModal",
  ImpoundVehicle = "ImpoundVehicleModal",
  AddInvolvedUnit = "AddInvolvedUnitModal",
  CreateTemporaryUnit = "CreateTemporaryUnitModal",
  BusinessSearch = "BusinessSearchModal",
  AlertPurgeIncidents = "AlertPurgeIncidents",
  PrivateMessage = "PrivateMessage",

  SearchMedicalRecord = "SearchMedicalRecordModal",
  CreateMedicalRecord = "CreateMedicalRecordModal",
  CreateDoctorVisit = "CreateDoctorVisitModal",
  SelectDeputy = "SelectDeputyModal",
  ManageDeputy = "ManageDeputyModal",
  ManageAOP = "ManageAOPModal",
  EnableSignal100 = "EnableSignal100Modal",

  ManageTruckLog = "ManageTruckLogModal",

  RequestExpungement = "RequestExpungementModal",
  RequestNameChange = "RequestNameChangeModal",
  ManageCourtEntry = "ManageCourtEntryModal",
  ManageCourtDate = "ManageCourtDateModal",
  ManageCourthousePost = "ManageCourthousePostModal",

  Tones = "TonesModal",
  ManageNote = "ManageNoteModal",

  AlertDeleteCitizen = "alert_DeleteCitizenModal",
  AlertMarkDeceased = "AlertMarkDeceasedModal",
  AlertDeleteVehicle = "alert_DeleteVehicleModal",
  AlertDeleteWeapon = "alert_DeleteWeaponModal",
  AlertDeleteMedicalRecord = "alert_DeleteMedicalRecordModal",
  AlertDeleteBleet = "alert_DeleteBleetModal",
  AlertEndTowCall = "AlertEndTowCallModal",
  AlertDeleteBusinessPost = "AlertDeleteBusinessPostModal",
  AlertFireEmployee = "AlertFireEmployeeModal",
  AlertDeleteOfficer = "AlertDeleteOfficerModal",
  AlertDeleteBolo = "AlertDeleteBoloModal",
  AlertEnd911Call = "AlertEnd911CallModal",
  AlertDeleteDeputy = "AlertDeleteDeputyModal",
  AlertDeleteTruckLog = "AlertDeleteTruckLogModal",
  AlertDeleteCallEvent = "AlertDeleteCallEventModal",
  AlertDeleteUser = "AlertDeleteUserModal",
  AlertDeleteRecord = "AlertDeleteRecordModal",
  AlertGiveTempPassword = "AlertGiveTempPasswordModal",
  AlertCheckoutImpoundedVehicle = "AlertCheckoutImpoundedVehicleModal",
  AlertDeleteIncident = "AlertDeleteIncidentModal",
  AlertReleaseCitizen = "AlertReleaseCitizenModal",
  AlertDeleteGroup = "AlertDeleteGroupModal",
  AlertRevokeWarrant = "AlertRevokeWarrantModal",
  AlertPurgeCalls = "AlertPurgeCallsModal",
  AlertDeleteValue = "AlertDeleteValueModal",
  AlertDeleteSelectedValues = "AlertDeleteSelectedValuesModal",
  AlertDeclineOfficer = "AlertDeclineOfficerModal",
  AlertUseOldPermissions = "AlertUseOldPermissionsModal",
  AlertDeleteExam = "AlertDeleteExamModal",
  AlertDeleteCustomField = "AlertDeleteCustomFieldModal",
  AlertRevokePersonalApiToken = "AlertRevokePersonalApiTokenModal",
  AlertDeleteUnitQualification = "AlertDeleteUnitQualificationModal",
  AlertDeleteUnit = "AlertDeleteUnitModal",
  AlertDeleteNote = "AlertDeleteNoteModal",
  AlertDeleteCourtDate = "AlertDeleteCourtDateModal",
  AlertDeleteCourtEntry = "AlertDeleteCourtEntryModal",
  AlertDeleteCustomRole = "AlertDeleteCustomRoleModal",
  AlertDeleteCourthousePost = "AlertDeleteCourthousePostModal",
  AlertDisableUser2FA = "AlertDisableUser2FAModal",
  AlertCancelExpungementRequest = "AlertCancelExpungementRequestModal",
  AlertDeleteBusinessRole = "AlertDeleteBusinessRoleModal",
  AlertDeclareCitizenAlive = "AlertDeclareCitizenAliveModal",
}
