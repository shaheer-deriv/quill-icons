import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFileCertificateRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFileCertificateRegularIcon',
  component: StandaloneFileCertificateRegularIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StandaloneFileCertificateRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFileCertificateRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
