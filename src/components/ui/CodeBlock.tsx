import React, { useState } from "react";
import { Column, Row, Text, Button, Icon } from "@once-ui-system/core";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = "javascript",
  title,
  description,
  showLineNumbers = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const formatLanguage = (lang: string) => {
    const languageMap: Record<string, string> = {
      'js': 'JavaScript',
      'ts': 'TypeScript',
      'jsx': 'React JSX',
      'tsx': 'React TSX',
      'html': 'HTML',
      'css': 'CSS',
      'scss': 'SCSS',
      'python': 'Python',
      'java': 'Java',
      'go': 'Go',
      'rust': 'Rust',
      'sql': 'SQL'
    };
    
    return languageMap[lang.toLowerCase()] || lang.toUpperCase();
  };

  const addLineNumbers = (codeString: string) => {
    const lines = codeString.split('\n');
    return lines.map((line, index) => (
      <Row key={index} gap="12">
        {showLineNumbers && (
          <Text 
            variant="body-default-s" 
            onBackground="neutral-weak" 
            style={{ minWidth: '32px', textAlign: 'right' }}
          >
            {index + 1}
          </Text>
        )}
        <Text 
          variant="body-default-s" 
          style={{ fontFamily: 'var(--font-code)', whiteSpace: 'pre' }}
        >
          {line}
        </Text>
      </Row>
    ));
  };

  return (
    <Column gap="12">
      {(title || language) && (
        <Row horizontal="between" vertical="center">
          <Row gap="12" vertical="center">
            {title && (
              <Text variant="body-default-m" weight="strong">
                {title}
              </Text>
            )}
            <Text 
              variant="body-default-s" 
              onBackground="neutral-medium"
              style={{ 
                background: 'var(--neutral-alpha-weak)',
                padding: '2px 8px',
                borderRadius: '4px'
              }}
            >
              {formatLanguage(language)}
            </Text>
          </Row>
          
          <Button 
            size="s" 
            variant="secondary" 
            onClick={handleCopy}
            prefixIcon={copied ? "check" : "copy"}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </Row>
      )}
      
      {description && (
        <Text variant="body-default-s" onBackground="neutral-medium">
          {description}
        </Text>
      )}
      
      <Column 
        gap="0"
        padding="16"
        border="neutral-alpha-weak"
        radius="m"
        background="surface"
        style={{ 
          overflow: 'auto',
          maxHeight: '400px',
          fontFamily: 'var(--font-code)'
        }}
      >
        {addLineNumbers(code)}
      </Column>
    </Column>
  );
};