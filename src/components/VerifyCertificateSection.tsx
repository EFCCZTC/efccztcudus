import { useState } from 'react';
import { Search, CheckCircle, XCircle, Shield, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const VerifyCertificateSection = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<'valid' | 'invalid' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [certificateDetails, setCertificateDetails] = useState<any>(null);

  // Mock certificate database
  const mockCertificates = {
    'EFCC-ZTC-2024-001': {
      recipientName: 'Adamu Mohammed',
      program: 'Anti-Corruption Leadership Training',
      dateIssued: 'June 15, 2024',
      issuer: 'EFCC-ZTC UDUS',
      status: 'Active'
    },
    'EFCC-ZTC-2024-002': {
      recipientName: 'Fatima Abdullah',
      program: 'Integrity Workshop Completion',
      dateIssued: 'May 20, 2024',
      issuer: 'EFCC-ZTC UDUS',
      status: 'Active'
    },
    'EFCC-ZTC-2023-045': {
      recipientName: 'Ibrahim Sani',
      program: 'Community Outreach Volunteer',
      dateIssued: 'December 10, 2023',
      issuer: 'EFCC-ZTC UDUS',
      status: 'Active'
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const certificate = mockCertificates[certificateId as keyof typeof mockCertificates];
    
    if (certificate) {
      setVerificationResult('valid');
      setCertificateDetails(certificate);
    } else {
      setVerificationResult('invalid');
      setCertificateDetails(null);
    }
    
    setIsLoading(false);
  };

  const resetSearch = () => {
    setCertificateId('');
    setVerificationResult(null);
    setCertificateDetails(null);
  };

  return (
    <section id="verify" className="section-padding bg-background">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-section mb-6">Verify Certificate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify the authenticity of certificates issued by EFCC-ZTC UDUS. 
              Enter the certificate ID to check its validity and view details.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Verification Form */}
            <div className="card-elegant">
              <h3 className="text-xl font-bold text-accent mb-6">Certificate Verification</h3>
              
              <form onSubmit={handleVerification} className="space-y-6">
                <div>
                  <Label htmlFor="certificateId" className="text-accent font-semibold">
                    Certificate ID
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      id="certificateId"
                      type="text"
                      placeholder="e.g., EFCC-ZTC-2024-001"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      className="pr-12"
                      disabled={isLoading}
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Certificate IDs are case-sensitive and follow the format: EFCC-ZTC-YYYY-XXX
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    type="submit" 
                    className="flex-1 btn-primary"
                    disabled={isLoading || !certificateId.trim()}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </>
                    )}
                  </Button>
                  {verificationResult && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={resetSearch}
                    >
                      New Search
                    </Button>
                  )}
                </div>
              </form>

              {/* Verification Result */}
              {verificationResult && (
                <div className={`mt-6 p-4 rounded-lg border-2 ${
                  verificationResult === 'valid' 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {verificationResult === 'valid' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                    <h4 className={`font-semibold ${
                      verificationResult === 'valid' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {verificationResult === 'valid' ? 'Certificate Valid' : 'Certificate Not Found'}
                    </h4>
                  </div>
                  
                  {verificationResult === 'valid' && certificateDetails ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-green-800">Recipient:</span>
                          <p className="text-green-700">{certificateDetails.recipientName}</p>
                        </div>
                        <div>
                          <span className="font-medium text-green-800">Program:</span>
                          <p className="text-green-700">{certificateDetails.program}</p>
                        </div>
                        <div>
                          <span className="font-medium text-green-800">Date Issued:</span>
                          <p className="text-green-700">{certificateDetails.dateIssued}</p>
                        </div>
                        <div>
                          <span className="font-medium text-green-800">Status:</span>
                          <p className="text-green-700">{certificateDetails.status}</p>
                        </div>
                      </div>
                      <p className="text-xs text-green-600 mt-4">
                        This certificate is authentic and was issued by EFCC-ZTC UDUS.
                      </p>
                    </div>
                  ) : (
                    <p className="text-red-700 text-sm">
                      The certificate ID you entered was not found in our database. 
                      Please check the ID and try again, or contact us if you believe this is an error.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              <div className="card-elegant bg-primary/5">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-accent mb-4">Certificate Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  EFCC-ZTC UDUS issues certificates for various programs and achievements. 
                  All certificates contain unique IDs for verification purposes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Training program completions</li>
                  <li>• Workshop participations</li>
                  <li>• Volunteer service recognition</li>
                  <li>• Leadership achievements</li>
                  <li>• Community service awards</li>
                </ul>
              </div>

              <div className="card-elegant">
                <h4 className="font-semibold text-accent mb-3">Sample Certificate IDs</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Try these sample IDs to see how verification works:
                </p>
                <div className="space-y-2">
                  {Object.keys(mockCertificates).map((id) => (
                    <button
                      key={id}
                      onClick={() => setCertificateId(id)}
                      className="block w-full text-left px-3 py-2 text-sm bg-secondary hover:bg-secondary/80 rounded transition-colors duration-200"
                    >
                      {id}
                    </button>
                  ))}
                </div>
              </div>

              <div className="card-elegant bg-accent/5">
                <h4 className="font-semibold text-accent mb-3">Need Help?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you're having trouble verifying a certificate or have questions about 
                  our certification process, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p><strong>Email:</strong> certificates@efccztcudus.org</p>
                  <p><strong>Phone:</strong> +234 (0) 802 XXX XXXX</p>
                  <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyCertificateSection;